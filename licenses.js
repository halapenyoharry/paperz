/* paperz — license registry. One job: turn a paper's `license` field into a name, a link, and a one-line meaning.
   Works in the browser (window.PZL) and in Node (require('./licenses.js').PZL). */
(function (root) {
  var LICENSES = {
    'CC0-1.0': {
      name: 'CC0 1.0',
      url: 'https://creativecommons.org/publicdomain/zero/1.0/',
      meaning: 'Donated to the commons. No conditions.'
    },
    'CC-BY-4.0': {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
      meaning: 'Free to use with credit to the human author.'
    },
    'CC-BY-SA-4.0': {
      name: 'CC BY-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-sa/4.0/',
      meaning: 'Free to use with credit; derivatives must stay open.'
    },
    'CC-BY-NC-4.0': {
      name: 'CC BY-NC 4.0',
      url: 'https://creativecommons.org/licenses/by-nc/4.0/',
      meaning: 'Free to use with credit, non-commercially.'
    },
    'all-rights-reserved': {
      name: 'All rights reserved',
      url: '',
      meaning: 'The human author retains rights to the human contribution.'
    }
  };

  var DEFAULT = 'CC0-1.0';
  var ALIASES = { 'donated to the commons': 'CC0-1.0' };

  function resolve(id, attribution) {
    var key = String(id || DEFAULT).trim();
    key = ALIASES[key.toLowerCase()] || key;
    var lic = LICENSES[key] || LICENSES[DEFAULT];
    if (!LICENSES[key]) key = DEFAULT;
    return {
      id: key,
      name: lic.name,
      url: lic.url,
      meaning: lic.meaning,
      attribution: attribution || '',
      // Short human-readable line, e.g. "CC BY 4.0 · © Harold"
      line: lic.name + (attribution && key !== 'CC0-1.0' ? ' · © ' + attribution : '')
    };
  }

  root.PZL = { resolve: resolve, LICENSES: LICENSES, DEFAULT: DEFAULT };
  if (typeof module !== 'undefined' && module.exports) module.exports = { PZL: root.PZL };
})(typeof window !== 'undefined' ? window : this);
