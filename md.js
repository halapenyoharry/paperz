/* paperz — tiny markdown + frontmatter renderer. No build step, no dependencies. */
(function (root) {
  var C = {
    ink: 'var(--color-text)', muted: 'var(--color-neutral-400)', faint: 'var(--color-neutral-500)', rule: 'var(--color-divider)',
    accent: 'var(--color-accent)', link: 'var(--color-accent-300)', figure: 'var(--color-accent-300)', panel: 'var(--color-surface)', bg: 'var(--color-bg)'
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function slugify(s) {
    return String(s).toLowerCase()
      .replace(/[*_`$\\]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function tex(s) {
    return esc(s
      .replace(/\\Delta/g, '\u0394').replace(/\\delta/g, '\u03B4')
      .replace(/\\times/g, '\u00D7').replace(/\\pm/g, '\u00B1')
      .replace(/\\cdot/g, '\u00B7').replace(/\\to/g, '\u2192')
      .replace(/\\([A-Za-z]+)/g, '$1'));
  }

  function parseArray(inner) {
    var items = [];
    var re = /\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|\x27([^\x27\\]*(?:\\.[^\x27\\]*)*)\x27|([^,]+))\s*(?:,|$)/g;
    var match;
    while ((match = re.exec(inner)) !== null) {
      var val = match[1] !== undefined ? match[1] : (match[2] !== undefined ? match[2] : match[3]);
      if (val && val.trim()) items.push(val.trim());
      if (re.lastIndex === match.index) break;
    }
    return items;
  }

  function parseFrontmatter(src) {
    var m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src);
    if (!m) return { meta: {}, body: src };
    var meta = {};
    var lines = m[1].split(/\r?\n/);
    var currentKey = null;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var mm = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
      if (mm) {
        currentKey = mm[1];
        var v = mm[2].trim();
        if (!v) {
          meta[currentKey] = [];
        } else if (v.charAt(0) === '[' && v.charAt(v.length - 1) === ']') {
          meta[currentKey] = parseArray(v.slice(1, -1));
          currentKey = null;
        } else {
          meta[currentKey] = v.replace(/^["\x27]|["\x27]$/g, '');
          currentKey = null;
        }
      } else if (currentKey && /^\s*-\s+(.*)$/.test(line)) {
        var item = /^\s*-\s+(.*)$/.exec(line)[1].trim().replace(/^["\x27]|["\x27]$/g, '');
        if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
        meta[currentKey].push(item);
      }
    }
    return { meta: meta, body: src.slice(m[0].length) };
  }

  function defaultWikilink(slug) {
    return '<span style="color:' + C.faint + '">' + esc(slug) + '</span>';
  }

  function inline(s, ctx) {
    s = s.replace(/[(<]cite\b[^>]*>/g, '').replace(/<\/cite>/g, '');
    var codes = [], maths = [];
    s = s.replace(/`([^`]+)`/g, function (m, c) { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = s.replace(/\$([^$]+)\$/g, function (m, c) { maths.push(c); return '\u0001' + (maths.length - 1) + '\u0001'; });
    s = esc(s);
    s = s.replace(/\[\[([^\]]+)\]\]/g, function (m, slug) { return (ctx.wikilink || defaultWikilink)(slug.trim()); });
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:' + C.link + ';text-decoration:none;border-bottom:1px solid color-mix(in srgb, var(--color-accent) 45%, transparent)">$1</a>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight:500;color:' + C.ink + '">$1</strong>');
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em style="font-style:italic">$2</em>');
    s = s.replace(/\u0001(\d+)\u0001/g, function (m, i) {
      return '<span style="font-family:var(--font-body);font-size:.9em;color:' + C.figure + '">' + tex(maths[+i]) + '</span>';
    });
    s = s.replace(/\u0000(\d+)\u0000/g, function (m, i) {
      return '<code style="font-family:var(--font-body);font-size:.88em;background:' + C.panel + ';padding:1px 5px;border-radius:4px;color:' + C.figure + '">' + esc(codes[+i]) + '</code>';
    });
    return s;
  }

  var HEAD = {
    1: 'font:500 clamp(30px,4vw,44px)/1.12 var(--font-body);letter-spacing:-.02em;margin:0 0 6px',
    2: 'font:500 clamp(23px,2.6vw,29px)/1.2 var(--font-body);letter-spacing:-.01em;margin:56px 0 16px',
    3: 'font:500 19px/1.3 var(--font-body);margin:36px 0 12px',
    4: 'font:500 16px/1.3 var(--font-body);margin:28px 0 10px'
  };

  function isBlockStart(l) {
    var t = l.trim();
    return !t || /^(#{1,6}\s|>|[-*]\s|\d+\.\s|\||---+\s*$|<)/.test(t);
  }

  function render(body, ctx) {
    ctx = ctx || {};
    var lines = body.split(/\r?\n/), out = [], toc = [], i = 0, figure = 0;

    while (i < lines.length) {
      var line = lines[i], t = line.trim();

      if (!t) { i++; continue; }

      if (t.charAt(0) === '<') {
        var raw = [];
        while (i < lines.length && lines[i].trim() !== '') { raw.push(lines[i]); i++; }
        out.push('<div style="margin:36px 0">' + raw.join('\n') + '</div>');
        continue;
      }

      if (/^---+$/.test(t)) {
        out.push('<hr class="hr" style="margin:48px 0 0">');
        i++; continue;
      }

      var h = /^(#{1,6})\s+(.*)$/.exec(t);
      if (h) {
        var lvl = h[1].length, txt = h[2], id = slugify(txt);
        if (lvl === 2) toc.push({ id: id, text: txt.replace(/^\d+\.\s*/, ''), num: (/^(\d+)\./.exec(txt) || [])[1] || '' });
        out.push('<h' + lvl + ' id="' + id + '" style="' + (HEAD[lvl] || HEAD[4]) + ';color:' + C.ink + ';scroll-margin-top:90px">' + inline(txt, ctx) + '</h' + lvl + '>');
        i++; continue;
      }

      if (t.charAt(0) === '>') {
        var q = [];
        while (i < lines.length && /^>/.test(lines[i].trim())) { q.push(lines[i].trim().replace(/^>\s?/, '')); i++; }
        var paras = q.join('\n').split(/\n\s*\n|\n(?=\s*$)/).map(function (p) { return p.trim(); }).filter(Boolean);
        out.push('<blockquote style="margin:32px 0;padding:26px 30px;background:' + C.panel +
          ';border-radius:var(--radius-md);font-family:var(--font-body);font-size:17.5px;line-height:1.62;color:' + C.ink + '">' +
          '<span style="display:block;width:32px;height:2px;background:' + C.accent + ';margin:0 0 18px"></span>' +
          paras.map(function (p) { return '<p style="margin:0 0 12px">' + inline(p, ctx) + '</p>'; }).join('').replace(/<p style="margin:0 0 12px">([^]*)<\/p>$/, '<p style="margin:0">$1</p>') +
          '</blockquote>');
        continue;
      }

      if (/^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t)) {
        var ordered = /^\d+\.\s+/.test(t), items = [];
        while (i < lines.length) {
          var lt = lines[i].trim();
          var mm = ordered ? /^\d+\.\s+(.*)$/.exec(lt) : /^[-*]\s+(.*)$/.exec(lt);
          if (mm) { items.push(mm[1]); i++; }
          else if (lt && !isBlockStart(lt) && items.length) { items[items.length - 1] += ' ' + lt; i++; }
          else break;
        }
        out.push('<' + (ordered ? 'ol' : 'ul') + ' style="margin:20px 0;padding-left:22px;display:flex;flex-direction:column;gap:10px;color:' + C.ink + '">' +
          items.map(function (it) {
            return '<li style="font-family:var(--font-body);font-size:17.5px;line-height:1.6;padding-left:4px">' + inline(it, ctx) + '</li>';
          }).join('') + '</' + (ordered ? 'ol' : 'ul') + '>');
        continue;
      }

      if (t.charAt(0) === '|') {
        var rows = [];
        while (i < lines.length && lines[i].trim().charAt(0) === '|') {
          rows.push(lines[i].trim().replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); }));
          i++;
        }
        var head = rows.shift();
        if (rows.length && rows[0].every(function (c) { return /^:?-{2,}:?$/.test(c); })) rows.shift();
        var cell = 'padding:12px 16px;text-align:left;vertical-align:top;font-family:var(--font-body);font-size:15.5px;line-height:1.5';
        out.push('<div style="margin:32px 0;overflow-x:auto"><table class="table" style="min-width:520px"><thead><tr>' +
          head.map(function (c) {
            return '<th style="' + cell + ';font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:' + C.muted + ';font-weight:500">' + inline(c, ctx) + '</th>';
          }).join('') + '</tr></thead><tbody>' +
          rows.map(function (r) {
            return '<tr>' + r.map(function (c, ci) {
              return '<td style="' + cell + ';color:' + (ci === 0 ? C.ink : C.muted) + '">' + inline(c, ctx) + '</td>';
            }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>');
        continue;
      }

      var buf = [line];
      i++;
      while (i < lines.length && !isBlockStart(lines[i])) { buf.push(lines[i]); i++; }
      var para = buf.join(' ').trim();

      if (/^\*Figure/.test(para)) {
        figure++;
        out.push('<p style="margin:-18px 0 40px;font-family:var(--font-body);font-size:12.5px;line-height:1.65;color:' + C.faint + ';max-width:62ch">' +
          inline(para.replace(/^\*|\*$/g, ''), ctx) + '</p>');
        continue;
      }

      out.push('<p style="margin:0 0 20px;font-family:var(--font-body);font-size:17.5px;line-height:1.68;color:' + C.ink + ';text-wrap:pretty">' + inline(para, ctx) + '</p>');
    }

    return { html: out.join('\n'), toc: toc, figures: figure };
  }

  root.PZ = { parseFrontmatter: parseFrontmatter, render: render, slugify: slugify, colors: C };
})(typeof window !== 'undefined' ? window : this);
