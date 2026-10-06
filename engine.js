/* LicenseLens engine - dependency license compatibility.
   Dataset: 64 curated SPDX ids. name/osi/fsf/dep flags are generated from the
   official SPDX license-list-data v3.29.0 JSON (tests/spdx-3.29.0.json) and are
   verified by oracle.py against that file. cat/gpl2/gpl3 are curated from the
   FSF license list, the ASF GPL-compatibility note, the EPL-2.0 FAQ, the MPL 2.0
   FAQ/section 3.3, and the CC BY-SA 4.0 one-way GPLv3 statement.
   This is a teaching tool, not legal advice. */
(function(root, factory){
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LL = factory();
})(typeof self !== 'undefined' ? self : this, function(){
'use strict';

var LICENSES = [{"id":"CC-BY-3.0","name":"Creative Commons Attribution 3.0 Unported","osi":false,"fsf":false,"dep":false,"cat":"content-attribution","gpl2":"n","gpl3":"n"},{"id":"CC-BY-4.0","name":"Creative Commons Attribution 4.0 International","osi":false,"fsf":true,"dep":false,"cat":"content-attribution","gpl2":"n","gpl3":"y"},{"id":"CC-BY-SA-3.0","name":"Creative Commons Attribution Share Alike 3.0 Unported","osi":false,"fsf":false,"dep":false,"cat":"content-sharealike","gpl2":"n","gpl3":"n"},{"id":"CC-BY-SA-4.0","name":"Creative Commons Attribution Share Alike 4.0 International","osi":false,"fsf":true,"dep":false,"cat":"content-sharealike","gpl2":"n","gpl3":"y"},{"id":"GPL-2.0-only","name":"GNU General Public License v2.0 only","osi":true,"fsf":true,"dep":false,"cat":"copyleft","gpl2":"y","gpl3":"n"},{"id":"GPL-2.0-or-later","name":"GNU General Public License v2.0 or later","osi":true,"fsf":true,"dep":false,"cat":"copyleft","gpl2":"y","gpl3":"y"},{"id":"GPL-3.0-only","name":"GNU General Public License v3.0 only","osi":true,"fsf":true,"dep":false,"cat":"copyleft","gpl2":"n","gpl3":"y"},{"id":"GPL-3.0-or-later","name":"GNU General Public License v3.0 or later","osi":true,"fsf":true,"dep":false,"cat":"copyleft","gpl2":"n","gpl3":"y"},{"id":"EUPL-1.2","name":"European Union Public License 1.2","osi":true,"fsf":true,"dep":false,"cat":"copyleft-compat-list","gpl2":"y","gpl3":"y"},{"id":"GFDL-1.3-only","name":"GNU Free Documentation License v1.3 only","osi":false,"fsf":true,"dep":false,"cat":"docs-copyleft","gpl2":"n","gpl3":"n"},{"id":"GFDL-1.3-or-later","name":"GNU Free Documentation License v1.3 or later","osi":false,"fsf":true,"dep":false,"cat":"docs-copyleft","gpl2":"n","gpl3":"n"},{"id":"OFL-1.1","name":"SIL Open Font License 1.1","osi":true,"fsf":true,"dep":false,"cat":"font","gpl2":"n","gpl3":"n"},{"id":"AGPL-1.0-only","name":"Affero General Public License v1.0 only","osi":false,"fsf":false,"dep":false,"cat":"network-copyleft","gpl2":"n","gpl3":"n"},{"id":"AGPL-1.0-or-later","name":"Affero General Public License v1.0 or later","osi":false,"fsf":false,"dep":false,"cat":"network-copyleft","gpl2":"n","gpl3":"n"},{"id":"AGPL-3.0-only","name":"GNU Affero General Public License v3.0 only","osi":true,"fsf":true,"dep":false,"cat":"network-copyleft","gpl2":"n","gpl3":"c"},{"id":"AGPL-3.0-or-later","name":"GNU Affero General Public License v3.0 or later","osi":true,"fsf":true,"dep":false,"cat":"network-copyleft","gpl2":"n","gpl3":"c"},{"id":"CC-BY-NC-4.0","name":"Creative Commons Attribution Non Commercial 4.0 International","osi":false,"fsf":false,"dep":false,"cat":"non-commercial","gpl2":"n","gpl3":"n"},{"id":"CC-BY-NC-ND-4.0","name":"Creative Commons Attribution Non Commercial No Derivatives 4.0 International","osi":false,"fsf":false,"dep":false,"cat":"non-commercial","gpl2":"n","gpl3":"n"},{"id":"CC-BY-NC-SA-4.0","name":"Creative Commons Attribution Non Commercial Share Alike 4.0 International","osi":false,"fsf":false,"dep":false,"cat":"non-commercial","gpl2":"n","gpl3":"n"},{"id":"CC-BY-ND-4.0","name":"Creative Commons Attribution No Derivatives 4.0 International","osi":false,"fsf":false,"dep":false,"cat":"non-free","gpl2":"n","gpl3":"n"},{"id":"JSON","name":"JSON License","osi":false,"fsf":false,"dep":false,"cat":"non-free","gpl2":"n","gpl3":"n"},{"id":"0BSD","name":"BSD Zero Clause License","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"AFL-3.0","name":"Academic Free License v3.0","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"Artistic-2.0","name":"Artistic License 2.0","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"BSD-1-Clause","name":"BSD 1-Clause License","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"BSD-2-Clause","name":"BSD 2-Clause \"Simplified\" License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"BSD-3-Clause","name":"BSD 3-Clause \"New\" or \"Revised\" License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"BSL-1.0","name":"Boost Software License 1.0","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"Beerware","name":"Beerware License","osi":false,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"BlueOak-1.0.0","name":"Blue Oak Model License 1.0.0","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"ISC","name":"ISC License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"MIT","name":"MIT License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"MIT-0","name":"MIT No Attribution","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"NCSA","name":"University of Illinois/NCSA Open Source License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"PostgreSQL","name":"PostgreSQL License","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"Python-2.0","name":"Python License 2.0","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"UPL-1.0","name":"Universal Permissive License v1.0","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"X11","name":"X11 License","osi":false,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"Zlib","name":"zlib License","osi":true,"fsf":true,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"curl","name":"curl License","osi":true,"fsf":false,"dep":false,"cat":"permissive","gpl2":"y","gpl3":"y"},{"id":"Apache-1.1","name":"Apache License 1.1","osi":true,"fsf":true,"dep":false,"cat":"permissive-advertising","gpl2":"n","gpl3":"n"},{"id":"BSD-4-Clause","name":"BSD 4-Clause \"Original\" or \"Old\" License","osi":false,"fsf":true,"dep":false,"cat":"permissive-advertising","gpl2":"n","gpl3":"n"},{"id":"OpenSSL","name":"OpenSSL License","osi":false,"fsf":true,"dep":false,"cat":"permissive-advertising","gpl2":"n","gpl3":"n"},{"id":"MS-PL","name":"Microsoft Public License","osi":true,"fsf":true,"dep":false,"cat":"permissive-filelevel","gpl2":"n","gpl3":"n"},{"id":"Apache-2.0","name":"Apache License 2.0","osi":true,"fsf":true,"dep":false,"cat":"permissive-patent","gpl2":"n","gpl3":"y"},{"id":"CC0-1.0","name":"Creative Commons Zero v1.0 Universal","osi":false,"fsf":true,"dep":false,"cat":"public-domain","gpl2":"y","gpl3":"y"},{"id":"Unlicense","name":"The Unlicense","osi":true,"fsf":true,"dep":false,"cat":"public-domain","gpl2":"y","gpl3":"y"},{"id":"WTFPL","name":"Do What The F*ck You Want To Public License","osi":false,"fsf":true,"dep":false,"cat":"public-domain","gpl2":"y","gpl3":"y"},{"id":"BUSL-1.1","name":"Business Source License 1.1","osi":false,"fsf":false,"dep":false,"cat":"source-available","gpl2":"n","gpl3":"n"},{"id":"Elastic-2.0","name":"Elastic License 2.0","osi":false,"fsf":false,"dep":false,"cat":"source-available","gpl2":"n","gpl3":"n"},{"id":"SSPL-1.0","name":"Server Side Public License, v 1","osi":false,"fsf":false,"dep":false,"cat":"source-available","gpl2":"n","gpl3":"n"},{"id":"CDDL-1.0","name":"Common Development and Distribution License 1.0","osi":true,"fsf":true,"dep":false,"cat":"weak-filelevel","gpl2":"n","gpl3":"n"},{"id":"CDDL-1.1","name":"Common Development and Distribution License 1.1","osi":true,"fsf":false,"dep":false,"cat":"weak-filelevel","gpl2":"n","gpl3":"n"},{"id":"EPL-1.0","name":"Eclipse Public License 1.0","osi":true,"fsf":true,"dep":false,"cat":"weak-filelevel","gpl2":"n","gpl3":"n"},{"id":"MPL-1.1","name":"Mozilla Public License 1.1","osi":true,"fsf":true,"dep":false,"cat":"weak-filelevel","gpl2":"n","gpl3":"n"},{"id":"MS-RL","name":"Microsoft Reciprocal License","osi":true,"fsf":true,"dep":false,"cat":"weak-filelevel","gpl2":"n","gpl3":"n"},{"id":"LGPL-2.0-only","name":"GNU Library General Public License v2 only","osi":true,"fsf":false,"dep":false,"cat":"weak-library","gpl2":"y","gpl3":"y"},{"id":"LGPL-2.0-or-later","name":"GNU Library General Public License v2 or later","osi":true,"fsf":false,"dep":false,"cat":"weak-library","gpl2":"y","gpl3":"y"},{"id":"LGPL-2.1-only","name":"GNU Lesser General Public License v2.1 only","osi":true,"fsf":true,"dep":false,"cat":"weak-library","gpl2":"y","gpl3":"y"},{"id":"LGPL-2.1-or-later","name":"GNU Lesser General Public License v2.1 or later","osi":true,"fsf":true,"dep":false,"cat":"weak-library","gpl2":"y","gpl3":"y"},{"id":"LGPL-3.0-only","name":"GNU Lesser General Public License v3.0 only","osi":true,"fsf":true,"dep":false,"cat":"weak-library","gpl2":"n","gpl3":"y"},{"id":"LGPL-3.0-or-later","name":"GNU Lesser General Public License v3.0 or later","osi":true,"fsf":true,"dep":false,"cat":"weak-library","gpl2":"n","gpl3":"y"},{"id":"EPL-2.0","name":"Eclipse Public License 2.0","osi":true,"fsf":true,"dep":false,"cat":"weak-secondary","gpl2":"n","gpl3":"c"},{"id":"MPL-2.0","name":"Mozilla Public License 2.0","osi":true,"fsf":true,"dep":false,"cat":"weak-secondary","gpl2":"y","gpl3":"y"}];

var BY_ID = {};
LICENSES.forEach(function(l){ BY_ID[l.id] = l; BY_ID[l.id.toLowerCase()] = l; });

/* GNU-family whole-work outbound ids offered by the chooser. */
var GNU = ['GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'];
var GNU2 = ['GPL-2.0-only','LGPL-2.0-only','LGPL-2.1-only','LGPL-2.0-or-later','LGPL-2.1-or-later'];

/* allowed whole-work outbounds per license id ('any' = universe minus excludes) */
function outboundsOf(l){
  switch(l.cat){
    case 'permissive':
    case 'public-domain':
      return {any:true, except:[], note:null};
    case 'permissive-patent': /* Apache-2.0: FSF - compatible with GPLv3, not GPLv2 */
      return {any:true, except:['GPL-2.0-only'],
        note:'FSF: Apache-2.0 is compatible with GPLv3 but not GPLv2 (patent termination vs section 7).'};
    case 'permissive-advertising': /* Apache-1.1, BSD-4-Clause, OpenSSL */
      return {any:true, except:GNU.slice(),
        note:'FSF: the advertising/endorsement clause makes this license GPL-incompatible.'};
    case 'permissive-filelevel': /* MS-PL */
    case 'weak-filelevel':      /* MS-RL, CDDL, EPL-1.0, MPL-1.1 */
      return {any:true, except:GNU.slice(),
        note:'File-level copyleft: files stay under this license; FSF lists it as GPL-incompatible, so it can only coexist as separately-licensed files, never merged into a GPL whole work.'};
    case 'weak-secondary':      /* EPL-2.0, MPL-2.0 */
      if(l.id==='EPL-2.0') return {any:true, except:GNU.slice(), cond:GNU.slice(),
        condNote:'EPL-2.0 is GPL-incompatible UNLESS the project adds the Secondary Licenses Compatibility Notice (EPL-2.0 FAQ); then GPL-2.0+ combinations are allowed.',
        note:'File-level: EPL files stay EPL.'};
      return {any:true, except:[], cond:GNU.slice(),
        condNote:'MPL-2.0 section 3.3 allows combination into a GNU-family Larger Work UNLESS the files carry Exhibit B ("Incompatible With Secondary Licenses").',
        note:'File-level: MPL files stay MPL and their source must stay available.'};
    case 'copyleft-compat-list': /* EUPL-1.2 */
      return {set:['EUPL-1.2','GPL-2.0-only','GPL-2.0-or-later','GPL-3.0-only','GPL-3.0-or-later','AGPL-3.0-only','AGPL-3.0-or-later'],
        note:'EUPL-1.2 appendix: the combined work may be relicensed under a listed compatible license (GPLv2, GPLv3, AGPLv3 and others).'};
    case 'weak-library': { /* LGPL family */
      if(l.id.indexOf('LGPL-3.0')===0) return {set:['LGPL-3.0-only','LGPL-3.0-or-later','GPL-3.0-only','AGPL-3.0-only'], library:true,
        note:'LGPL-3.0: merged works go GPL-3.0; usable from non-GPL apps only via library-style linking (allow replacement/relinking).'};
      return {set:[l.id,'GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'], library:true,
        note:'LGPL section 3 lets you relicense the merged work under GPL-2.0-or-later; usable from non-GPL apps only via library-style linking (allow replacement/relinking).'};
    }
    case 'copyleft': {
      if(l.id==='GPL-2.0-only') return {set:['GPL-2.0-only'], note:'Strong copyleft: the whole combined work must be GPLv2.'};
      if(l.id==='GPL-2.0-or-later') return {set:['GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only'], note:'"or any later version" lets the combined work move to GPLv3 (and AGPLv3 via section 13 linking).'};
      if(l.id==='GPL-3.0-only') return {set:['GPL-3.0-only','AGPL-3.0-only'], note:'GPLv3-only: the whole work is GPLv3, or AGPLv3 when combined with AGPL code (GPLv3 section 13).'};
      return {set:['GPL-3.0-only','AGPL-3.0-only'], note:'"or later" capped at the versions known today.'};
    }
    case 'network-copyleft': {
      if(l.id.indexOf('AGPL-3.0')===0) return {set:['AGPL-3.0-only'],
        note:'AGPLv3 section 13: users interacting over a network must be offered the source of the whole work. Only an AGPLv3 outbound satisfies it.'};
      return {set:[], note:'AGPLv1 is GPL-incompatible (FSF) and almost never usable in modern combinations.'};
    }
    case 'content-attribution': {
      if(l.id==='CC-BY-4.0') return {any:true, except:[], asset:true,
        note:'Asset-level: ships inside any project while the asset keeps CC BY 4.0. FSF: one-way compatible with GPLv3 (mergeable into GPLv3, not back); not compatible with GPLv2.'};
      return {any:true, except:[], asset:true, note:l.id+': keep attribution; not GPL-compatible (FSF). Ships as a separately-licensed asset.'};
    }
    case 'content-sharealike': {
      if(l.id==='CC-BY-SA-4.0') return {any:true, except:[], asset:true,
        note:'Asset-level: ships anywhere while adaptations keep ShareAlike. Creative Commons + FSF: one-way compatible with GPLv3 only; not compatible with GPLv2.'};
      return {any:true, except:[], asset:true, note:l.id+': share-alike content license, not GPL-compatible (FSF). Ships as a separately-licensed asset.'};
    }
    case 'docs-copyleft':
      return {any:true, except:[], asset:true, note:'GFDL is for documentation and is GPL-incompatible (FSF); keep it as a docs license, never merge it into code.'};
    case 'font':
      return {any:true, except:[], asset:true, note:'OFL-1.1 is GPL-incompatible (FSF) unless the copyright holder adds a font exception; fine as a bundled font asset that keeps the OFL and its reserved names.'};
    case 'non-commercial':
      return {neverMerge:true, ncLike:true, set:[],
        note:l.id+' carries a NonCommercial clause: GPL section 7 forbids combining it with GPL code at all, and in any other project the product inherits the no-commercial-use restriction.'};
    case 'non-free':
      if(l.id==='JSON') return {any:true, except:GNU.slice(),
        note:'The JSON license ("Good, not Evil") is non-free per the FSF and Debian; its use restriction collides with GPL section 7, and distros treat it as replace-on-sight.'};
      return {neverMerge:true, set:[], note:l.id+' is not FSF-free (NoDerivatives blocks modified versions).'};
    case 'source-available':
      if(l.id==='SSPL-1.0') return {neverMerge:true, set:[],
        note:'SSPL-1.0 is not OSI-approved: offering the program as a service requires releasing the entire service stack under SSPL. There is no practical outbound that absorbs an SSPL dependency.'};
      return {neverMerge:true, saCond:true, set:[],
        note:l.id+' is source-available, not OSI-approved open source. Permissive/proprietary use works only inside its field-of-use limits (no competing/managed service); it cannot combine with copyleft outbounds.'};
  }
  return {set:[]};
}

/* obligations shown per license */
function obligationsOf(l){
  switch(l.cat){
    case 'permissive': return ['Keep the copyright and permission notice in source and binary distributions.'];
    case 'public-domain': return ['No conditions. A fallback all-permissive license applies where dedication is impossible.'];
    case 'permissive-patent': return ['Keep notices and any NOTICE file.','State significant changes.','Grant terminates if you sue over patents covering the work.'];
    case 'permissive-advertising': return ['Keep notices.','Advertising/endorsement clause: credit required in ads or derived publicity (why it is GPL-incompatible).'];
    case 'permissive-filelevel': return ['Keep notices; per-file copyleft: modified files stay under this license.'];
    case 'weak-filelevel': return ['Publish source of the covered files when you distribute.','Files stay under this license even inside a larger differently-licensed work.'];
    case 'weak-secondary': return l.id==='MPL-2.0'
      ? ['Publish source of MPL files.','Check for Exhibit B ("Incompatible With Secondary Licenses") before combining with GPL/LGPL/AGPL.']
      : ['Publish source of EPL files.','Check for the Secondary Licenses Compatibility Notice before combining with GPL.'];
    case 'copyleft-compat-list': return ['Share-alike on the covered code.','Combined works may move to a license from the EUPL appendix compatibility list.'];
    case 'weak-library': return ['Allow users to replace/relink the library (dynamic linking, or provide object files).','Keep notices; if you modify the library itself, publish those modifications.'];
    case 'copyleft': return ['Offer complete corresponding source of the whole combined work.','License the whole work under the same GPL version.','Keep notices; mark modifications.'];
    case 'network-copyleft': return ['Offer source to every user who interacts with the work over a network (section 13).','The whole combined work must be AGPL.'];
    case 'content-attribution': return ['Credit the creator; keep the license notice on the asset.'];
    case 'content-sharealike': return ['Credit the creator.','Adaptations of the asset stay under the same ShareAlike license.'];
    case 'docs-copyleft': return ['Offer transparent copies of the documentation; modifications stay GFDL.'];
    case 'font': return ['Bundled fonts keep the OFL with their copyright notice; reserved font names apply.'];
    case 'non-commercial': return ['No commercial use whatsoever.'];
    case 'non-free': return ['Non-free license; replacing the dependency is usually cheaper than lawyering.'];
    case 'source-available': return ['Read the field-of-use restrictions; offering the software as a service is typically restricted.'];
  }
  return [];
}

/* ---------------- SPDX expression parsing ---------------- */
var ALIASES = {
 'apache':'Apache-2.0','apache 2':'Apache-2.0','apache-2':'Apache-2.0','apache2':'Apache-2.0',
 'apache 2.0':'Apache-2.0','apache license 2.0':'Apache-2.0','apache software license':'Apache-2.0','asl 2.0':'Apache-2.0','asl-2.0':'Apache-2.0',
 'apache 1.1':'Apache-1.1','apache-1.1':'Apache-1.1',
 'mit':'MIT','mit license':'MIT','mit/x11':'MIT','expat':'MIT','mit-0':'MIT-0','mit0':'MIT-0','mit no attribution':'MIT-0',
 'isc':'ISC','isc license':'ISC',
 'bsd':'BSD-3-Clause','bsd license':'BSD-3-Clause','new bsd':'BSD-3-Clause','modified bsd':'BSD-3-Clause','bsd 3-clause':'BSD-3-Clause','bsd-3':'BSD-3-Clause','bsd3':'BSD-3-Clause','3-clause bsd':'BSD-3-Clause',
 'simplified bsd':'BSD-2-Clause','freebsd':'BSD-2-Clause','bsd 2-clause':'BSD-2-Clause','bsd-2':'BSD-2-Clause','bsd2':'BSD-2-Clause','2-clause bsd':'BSD-2-Clause',
 'original bsd':'BSD-4-Clause','bsd 4-clause':'BSD-4-Clause','bsd4':'BSD-4-Clause',
 '0bsd':'0BSD','bsd zero':'0BSD','zlib':'Zlib','boost':'BSL-1.0','boost software license':'BSL-1.0','bsl':'BSL-1.0',
 'postgresql':'PostgreSQL','postgres':'PostgreSQL','ncsa':'NCSA','upl':'UPL-1.0','upl-1.0':'UPL-1.0',
 'artistic 2':'Artistic-2.0','artistic-2':'Artistic-2.0','python':'Python-2.0','psf':'Python-2.0','python software foundation license':'Python-2.0',
 'beerware':'Beerware','wtfpl':'WTFPL','unlicense':'Unlicense','the unlicense':'Unlicense','cc0':'CC0-1.0','cc0 1.0':'CC0-1.0',
 'public domain':'CC0-1.0',
 'gpl':'GPL-3.0-only','gplv2':'GPL-2.0-only','gpl2':'GPL-2.0-only','gpl v2':'GPL-2.0-only','gpl-2':'GPL-2.0-only','gpl-2.0':'GPL-2.0-only','gpl 2':'GPL-2.0-only',
 'gplv2+':'GPL-2.0-or-later','gpl2+':'GPL-2.0-or-later','gpl-2.0+':'GPL-2.0-or-later','gpl-2+':'GPL-2.0-or-later',
 'gplv3':'GPL-3.0-only','gpl3':'GPL-3.0-only','gpl v3':'GPL-3.0-only','gpl-3':'GPL-3.0-only','gpl-3.0':'GPL-3.0-only','gpl 3':'GPL-3.0-only','gnu gpl v3':'GPL-3.0-only','gnugplv3':'GPL-3.0-only',
 'gplv3+':'GPL-3.0-or-later','gpl3+':'GPL-3.0-or-later','gpl-3.0+':'GPL-3.0-or-later','gpl-3+':'GPL-3.0-or-later',
 'lgpl':'LGPL-2.1-only','lgplv2.1':'LGPL-2.1-only','lgpl2.1':'LGPL-2.1-only','lgpl-2.1':'LGPL-2.1-only','lgpl 2.1':'LGPL-2.1-only',
 'lgplv2.1+':'LGPL-2.1-or-later','lgpl2.1+':'LGPL-2.1-or-later','lgpl-2.1+':'LGPL-2.1-or-later',
 'lgplv3':'LGPL-3.0-only','lgpl3':'LGPL-3.0-only','lgpl-3':'LGPL-3.0-only','lgpl 3':'LGPL-3.0-only',
 'lgplv3+':'LGPL-3.0-or-later','lgpl3+':'LGPL-3.0-or-later','lgpl-3.0+':'LGPL-3.0-or-later',
 'agpl':'AGPL-3.0-only','agplv3':'AGPL-3.0-only','agpl3':'AGPL-3.0-only','agpl-3':'AGPL-3.0-only','agpl 3':'AGPL-3.0-only',
 'agplv3+':'AGPL-3.0-or-later','agpl3+':'AGPL-3.0-or-later','agpl-3.0+':'AGPL-3.0-or-later',
 'agplv1':'AGPL-1.0-only','agpl1':'AGPL-1.0-only',
 'mpl':'MPL-2.0','mpl2':'MPL-2.0','mplv2':'MPL-2.0','mpl 2':'MPL-2.0','mpl-2':'MPL-2.0','mpl 2.0':'MPL-2.0','mozilla public license 2.0':'MPL-2.0',
 'mpl1.1':'MPL-1.1','mpl 1.1':'MPL-1.1',
 'epl':'EPL-2.0','epl2':'EPL-2.0','epl-2':'EPL-2.0','epl 2.0':'EPL-2.0','eclipse public license':'EPL-2.0','epl1':'EPL-1.0','epl 1.0':'EPL-1.0',
 'cddl':'CDDL-1.0','cddl1':'CDDL-1.0','cddl 1.0':'CDDL-1.0','cddl 1.1':'CDDL-1.1',
 'eupl':'EUPL-1.2','eupl 1.2':'EUPL-1.2','eupl-1.2':'EUPL-1.2',
 'ms-pl':'MS-PL','mspl':'MS-PL','ms-rl':'MS-RL','msrl':'MS-RL',
 'cc by':'CC-BY-4.0','cc-by':'CC-BY-4.0','cc by 4':'CC-BY-4.0','cc-by-4':'CC-BY-4.0','cc by 3':'CC-BY-3.0','cc-by-3':'CC-BY-3.0',
 'cc by-sa':'CC-BY-SA-4.0','cc by-sa 4':'CC-BY-SA-4.0','cc by-sa 3':'CC-BY-SA-3.0',
 'cc by-nc':'CC-BY-NC-4.0','cc by-nc-sa':'CC-BY-NC-SA-4.0','cc by-nc-nd':'CC-BY-NC-ND-4.0','cc by-nd':'CC-BY-ND-4.0',
 'gfdl':'GFDL-1.3-only','gfdl 1.3':'GFDL-1.3-only',
 'ofl':'OFL-1.1','sil ofl':'OFL-1.1','ofl 1.1':'OFL-1.1',
 'json':'JSON','json license':'JSON','sspl':'SSPL-1.0','sspl-1.0':'SSPL-1.0',
 'busl':'BUSL-1.1','busl-1.1':'BUSL-1.1','business source license':'BUSL-1.1',
 'elastic':'Elastic-2.0','elastic-2.0':'Elastic-2.0','elastic license 2.0':'Elastic-2.0','openssl':'OpenSSL'
};

function normalizeId(raw){
  var s = String(raw).trim();
  if(!s) return null;
  if(BY_ID[s]) return {id:BY_ID[s].id, via:null};
  var low = s.toLowerCase().replace(/\s+/g,' ').trim();
  if(BY_ID[low]) return {id:BY_ID[low].id, via:null};
  if(ALIASES[low]) return {id:ALIASES[low], via:'alias'};
  /* try without trailing "license"/"version v" */
  var stripped = low.replace(/\s*license\s*$/,'').replace(/^the\s+/,'');
  if(ALIASES[stripped]) return {id:ALIASES[stripped], via:'alias'};
  if(BY_ID[stripped]) return {id:BY_ID[stripped].id, via:null};
  return {id:s, via:'unknown'};
}

function tokenize(s){
  var toks=[]; var i=0;
  while(i<s.length){
    var c=s[i];
    if(/\s/.test(c)){i++;continue;}
    if(c==='('||c===')'){toks.push({t:c});i++;continue;}
    if(c==='+'){toks.push({t:'+'});i++;continue;}
    var m=/^[A-Za-z0-9.:_-]+/.exec(s.slice(i));
    if(m){toks.push({t:'w',v:m[0]});i+=m[0].length;continue;}
    i++;
  }
  return toks;
}

function parseExpr(s){
  var toks=tokenize(s); var pos=0;
  function peek(){return toks[pos];}
  function word(){var t=toks[pos]; return t&&t.t==='w'?t.v.toUpperCase():null;}
  function parseOr(){
    var kids=[parseAnd()];
    while(word()==='OR'){pos++;kids.push(parseAnd());}
    return kids.length===1?kids[0]:{type:'or',kids:kids};
  }
  function parseAnd(){
    var kids=[parseUnary()];
    while(word()==='AND'){pos++;kids.push(parseUnary());}
    return kids.length===1?kids[0]:{type:'and',kids:kids};
  }
  function parseUnary(){
    var t=peek();
    if(!t) throw new Error('unexpected end of expression');
    if(t.t==='('){pos++;var e=parseOr();if(!peek()||peek().t!==')')throw new Error('missing )');pos++;return e;}
    if(t.t==='w'){
      var idraw=t.v; pos++;
      var plus=false, exc=null;
      if(peek()&&peek().t==='+'){plus=true;pos++;}
      if(word()==='WITH'){pos++;var e2=peek();if(e2&&e2.t==='w'){exc=e2.v;pos++;}}
      var n=normalizeId(idraw);
      var id=n.id;
      if(plus){ /* apply + semantics on canonical ids */
        if(id==='GPL-2.0-only')id='GPL-2.0-or-later';
        else if(id==='GPL-3.0-only')id='GPL-3.0-or-later';
        else if(id==='LGPL-2.1-only')id='LGPL-2.1-or-later';
        else if(id==='LGPL-2.0-only')id='LGPL-2.0-or-later';
        else if(id==='LGPL-3.0-only')id='LGPL-3.0-or-later';
        else if(id==='AGPL-3.0-only')id='AGPL-3.0-or-later';
        else if(id==='GFDL-1.3-only')id='GFDL-1.3-or-later';
      }
      return {type:'lic', id:id, plus:plus, exception:exc, via:n.via, raw:idraw};
    }
    throw new Error('unexpected token '+JSON.stringify(t));
  }
  var ast=parseOr();
  if(pos<toks.length) throw new Error('trailing tokens in expression');
  return ast;
}

function astLics(ast){
  if(ast.type==='lic') return [ast];
  var out=[]; ast.kids.forEach(function(k){out=out.concat(astLics(k));});
  return out;
}
function astToString(ast){
  if(ast.type==='lic') return ast.id+(ast.exception?' WITH '+ast.exception:'');
  var op = ast.type==='or'?' OR ':' AND ';
  return '('+ast.kids.map(astToString).join(op)+')';
}

/* ---------------- combination logic ---------------- */
/* Each component contributes an OUT constraint. OR branches: union of branches.
   AND branches: intersection of kids. */
function outboundsForAst(ast){
  if(ast.type==='lic'){
    var l=BY_ID[ast.id];
    if(!l) return {unknown:true, id:ast.id};
    var ob=outboundsOf(l);
    return {known:true, ob:ob, lic:l};
  }
  if(ast.type==='or'){
    var opts=ast.kids.map(outboundsForAst);
    return {known:opts.every(function(o){return o.known;}), or:opts};
  }
  /* and: all must hold -> intersect */
  var parts=ast.kids.map(outboundsForAst);
  return {known:parts.every(function(o){return o.known;}), and:parts};
}

var UNIVERSE = ['MIT','BSD-3-Clause','Apache-2.0','MPL-2.0','EPL-2.0','EUPL-1.2',
  'LGPL-2.1-only','LGPL-3.0-only','GPL-2.0-only','GPL-3.0-only','AGPL-3.0-only','Proprietary'];

function intersectSets(a,b){
  /* a,b: {any,except} or {set:[...]} or {unknown} over UNIVERSE */
  if(a.unknown||b.unknown) return {unknown:true};
  var sa = a.any? UNIVERSE.filter(function(x){return a.except.indexOf(x)<0;}) : a.set.slice();
  var sb = b.any? UNIVERSE.filter(function(x){return b.except.indexOf(x)<0;}) : b.set.slice();
  var inter = sa.filter(function(x){return sb.indexOf(x)>=0;});
  return {set:inter};
}

function constraintOf(node){
  /* returns {kind:'set'|'or', set:[...] | options:[[...],...]} simplified to a
     disjunction of feasible outbound sets (list of sets; elementwise pick-any) */
  if(node.known && node.ob){
    if(node.ob.neverMerge) return [null]; /* standalone restriction: does not bound the code-license merge */
    var s = node.ob.any? UNIVERSE.filter(function(x){return node.ob.except.indexOf(x)<0;}) : node.ob.set.slice();
    return [s];
  }
  if(node.or){
    var out=[]; node.or.forEach(function(o){out=out.concat(constraintOf(o));});
    return out;
  }
  if(node.and){
    var acc=node.and.map(constraintOf);
    /* combine: for each tuple pick, intersect; empty intersections drop */
    var combos=[[]];
    acc.forEach(function(list){
      var next=[];
      combos.forEach(function(c){list.forEach(function(s){
        var cur={set:UNIVERSE.slice()};
        c.concat([s]).forEach(function(ss){cur=intersectSets(cur,{set:ss});});
        if(!cur.unknown && cur.set.length) next.push(c.concat([s]));
      });});
      combos=next;
    });
    return combos.map(function(c){
      var cur={set:UNIVERSE.slice()};
      c.forEach(function(ss){cur=intersectSets(cur,{set:ss});});
      return cur.set;
    });
  }
  if(node.unknown) return [null]; /* null = unconstrained but unknown license */
  return [UNIVERSE.slice()];
}

function combine(components){
  /* components: [{name, ast}] -> feasible whole-work outbounds + conflicts */
  var perComp = components.map(function(c){return {name:c.name, sets:constraintOf(outboundsForAst(c.ast)), ast:c.ast};});
  var feasible = UNIVERSE.slice();
  perComp.forEach(function(pc){
    if(pc.sets.length===1 && pc.sets[0]===null) return; /* unknown: unconstrained */
    var union={};
    pc.sets.forEach(function(s){if(s)s.forEach(function(x){union[x]=1;});});
    feasible = feasible.filter(function(x){return union[x];});
  });
  var conflicts=[];
  if(!feasible.length){
    /* find blocking pairs: pair whose intersection is empty */
    for(var i=0;i<perComp.length;i++)for(var j=i+1;j<perComp.length;j++){
      var ui={}; perComp[i].sets.forEach(function(s){if(s)s.forEach(function(x){ui[x]=1;});});
      var uj={}; perComp[j].sets.forEach(function(s){if(s)s.forEach(function(x){uj[x]=1;});});
      var inter=Object.keys(ui).filter(function(x){return uj[x];});
      if(!inter.length) conflicts.push([perComp[i].name, perComp[j].name]);
    }
  }
  return {feasible:feasible, conflicts:conflicts};
}

function distribute(components, outbound){
  /* per-component verdict for a chosen outbound */
  var results=[];
  components.forEach(function(c){
    if(c.unlicensed){
      results.push({name:c.name, verdict:'blocked',
        reason:'No license means all rights reserved: you have no permission to copy, modify or distribute this dependency. Get a license grant or replace it.',
        cond:null, licIds:[]});
      return;
    }
    if(!c.ast){
      results.push({name:c.name, verdict:'unknown', reason:c.error||'unparseable license expression', cond:null, licIds:[]});
      return;
    }
    var node=outboundsForAst(c.ast);
    var v=verdictForNode(node, outbound);
    results.push({name:c.name, verdict:v.status, reason:v.reason, cond:v.cond||null, licIds:astLics(c.ast).map(function(a){return a.id;})});
  });
  var blocked=results.filter(function(r){return r.verdict==='blocked';});
  var cond=results.filter(function(r){return r.verdict==='conditional'||r.verdict==='unknown';});
  return {outbound:outbound, results:results,
    overall: blocked.length?'blocked':(cond.length?'conditional':'ok')};
}

function verdictForNode(node, outbound){
  if(node.known && node.ob){
    return verdictForLic(node.ob, node.lic, outbound);
  }
  if(node.or){
    /* best branch wins; report which */
    var vs=node.or.map(function(o){return {v:verdictForNode(o,outbound)};});
    var rank={ok:0,conditional:1,blocked:2,unknown:1};
    vs.sort(function(a,b){return rank[a.v.status]-rank[b.v.status];});
    var best=vs[0].v;
    return {status:best.status, reason:best.reason+' (chosen OR branch)', cond:best.cond};
  }
  if(node.and){
    var stats=node.and.map(function(o){return verdictForNode(o,outbound);});
    var bad=stats.filter(function(s){return s.status==='blocked';});
    if(bad.length) return {status:'blocked', reason:bad[0].reason};
    var conds=stats.filter(function(s){return s.status==='conditional';});
    if(conds.length) return {status:'conditional', reason:conds.map(function(s){return s.reason;}).join(' '), cond:conds[0].cond};
    var unk=stats.filter(function(s){return s.status==='unknown';});
    if(unk.length) return {status:'unknown', reason:'unknown license id - cannot verify'};
    return {status:'ok', reason:'all AND branches satisfied'};
  }
  if(node.unknown) return {status:'unknown', reason:'unknown license id "'+node.id+'" - cannot verify'};
  return {status:'unknown', reason:'unresolved'};
}

function verdictForLic(ob, lic, outbound){
  var inSet;
  if(ob.any) inSet = ob.except.indexOf(outbound)<0;
  else inSet = ob.set.indexOf(outbound)>=0;
  var isGNU = GNU.indexOf(outbound)>=0;
  if(lic.id==='Apache-2.0' && /^LGPL-2/.test(outbound))
    return {status:'conditional', reason:'FSF rules Apache-2.0 incompatible with GPLv2; LGPL-2.x belongs to the same generation, and the safe documented paths are LGPL-3.0 or GPL-3.0 outbounds.', cond:'Re-target LGPL-3.0 or GPL-3.0, or get counsel to sign off.'};
  if(ob.neverMerge){
    if(ob.ncLike && !isGNU) return {status:'conditional', reason:ob.note, cond:'The asset ships under its own license; the product inherits the NonCommercial restriction.'};
    if(ob.saCond && !isGNU) return {status:'conditional', reason:ob.note, cond:'Check the Additional Use Grant / service-offering clause before shipping.'};
    return {status:'blocked', reason:ob.note};
  }
  if(inSet){
    /* conditional overlays */
    if(ob.cond && ob.cond.indexOf(outbound)>=0) return {status:'conditional', reason:ob.condNote, cond:ob.condNote};
    if(ob.library && !isGNU) return {status:'conditional', reason:ob.note, cond:'LGPL library use: allow replacement/relinking, keep notices.'};
    if(ob.asset) return {status:'ok', reason:ob.note+' (asset-level)'};
    return {status:'ok', reason:ob.note||lic.id+' permits this combination.'};
  }
  /* not in set: check conditional paths */
  if(ob.library && !isGNU){
    return {status:'conditional', reason:lic.id+' is not re-licensable to '+outbound+', but library-style use is fine: link dynamically (or ship replaceable object files), keep notices, publish any changes to the library itself.',
      cond:'LGPL library use: allow replacement/relinking.'};
  }
  if(ob.cond && ob.cond.indexOf(outbound)>=0)
    return {status:'conditional', reason:ob.condNote, cond:ob.condNote};
  return {status:'blocked', reason:(ob.note||lic.id+' cannot be combined under '+outbound+'.')};
}

/* ---------------- input parsing ---------------- */
function parseDeps(text){
  text=String(text||'').trim();
  if(!text) return {components:[], warnings:['empty input']};
  var warnings=[];
  if(text[0]==='{'||text[0]==='['){
    try{
      var obj=JSON.parse(text);
      var comps=[];
      if(Array.isArray(obj)){
        obj.forEach(function(e){
          if(e&&typeof e==='object'){
            var lic=e.license||e.licenses||e.spdx||null;
            if(Array.isArray(lic)) lic=lic.join(' AND ');
            comps.push({name:e.name||e.package||e.id||'?', expr:String(lic||'UNLICENSED')});
          }
        });
      } else if(obj && typeof obj==='object'){
        var vals=Object.keys(obj);
        var looksLikeLicenseMap = vals.length && vals.every(function(k){var v=obj[k]; return typeof v==='string';});
        var isPkg = obj.name!==undefined && (obj.license!==undefined || obj.dependencies || obj.devDependencies);
        if(isPkg){
          if(obj.license) comps.push({name:obj.name+' (this package)', expr:String(obj.license)});
          else { comps.push({name:(obj.name||'package')+' (this package)', expr:'UNLICENSED'}); warnings.push('package.json has no "license" field: the package itself is all-rights-reserved, whatever the registry shows.'); }
        } else if(looksLikeLicenseMap){
          vals.forEach(function(k){comps.push({name:k, expr:String(obj[k])});});
        } else {
          /* license-checker style: {name@ver: {licenses: "MIT"}} */
          var any=false;
          vals.forEach(function(k){var v=obj[k];
            if(v&&typeof v==='object'&&(v.licenses||v.license)){any=true;
              var lic=v.licenses||v.license;
              if(Array.isArray(lic)) lic=lic.join(' AND ');
              comps.push({name:k, expr:String(lic)});
            }});
          if(!any) return {components:[], warnings:['JSON recognized but no license fields found']};
        }
      }
      return finishComponents(comps, warnings);
    }catch(e){
      warnings.push('JSON parse failed ('+e.message+'); treating as line list');
    }
  }
  var lines=text.split(/\r?\n/), comps2=[];
  lines.forEach(function(line){
    var s=line.trim();
    if(!s||s[0]==='#') return;
    var m=/\s+(?:[-\u2013\u2014]|@)\s+|\t|:\s+/.exec(s);
    if(m){
      var name=s.slice(0,m.index).trim(), expr=s.slice(m.index+m[0].length).trim();
      if(normalizeId(expr).via!=='unknown'){ comps2.push({name:name, expr:expr}); return; }
      try{ parseExpr(expr); comps2.push({name:name, expr:expr}); return; }catch(e){}
    }
    comps2.push({name:s, expr:s});
  });
  return finishComponents(comps2, warnings);
}

function finishComponents(comps, warnings){
  var out=[];
  comps.forEach(function(c){
    var expr=String(c.expr).trim();
    if(/^(unlicensed|none|unknown|proprietary|closed)$/i.test(expr)){
      out.push({name:c.name, expr:expr, ast:null, unlicensed:true});
      return;
    }
    /* whole-string alias first: multi-word names like "Apache 2" or
       "MIT License" never survive the expression tokenizer */
    var n=normalizeId(expr);
    if(n.via!=='unknown'){
      out.push({name:c.name, expr:expr, ast:{type:'lic', id:n.id, plus:false, exception:null, via:n.via, raw:expr}});
      return;
    }
    try{
      out.push({name:c.name, expr:expr, ast:parseExpr(expr)});
    }catch(e){
      out.push({name:c.name, expr:expr, ast:null, error:'could not parse "'+expr+'" as an SPDX expression'});
    }
  });
  out.forEach(function(c){
    if(!c.ast) return;
    astLics(c.ast).forEach(function(a){
      if(a.via==='unknown') warnings.push(c.name+': "'+a.raw+'" is not a known SPDX id or alias.');
      else if(a.via==='alias') warnings.push(c.name+': "'+a.raw+'" read as '+a.id+'.');
      var l=BY_ID[a.id];
      if(l&&l.dep) warnings.push(c.name+': '+a.id+' is a deprecated SPDX id.');
      if(l&&l.cat==='network-copyleft') warnings.push(c.name+': '+a.id+' triggers on network use - an API or web app counts as distribution to its users.');
      if(l&&l.cat==='non-commercial') warnings.push(c.name+': '+a.id+' forbids commercial use.');
      if(l&&l.cat==='source-available') warnings.push(c.name+': '+a.id+' is not OSI-approved open source.');
      if(a.exception) warnings.push(c.name+': exception "'+a.exception+'" noted - exceptions usually widen permissions; this tool evaluates the base license.');
    });
  });
  return {components:out, warnings:warnings};
}

/* top-level analyze used by UI and tests */
function analyze(text, outbound){
  var p=parseDeps(text);
  var withAst=p.components.filter(function(c){return c.ast;});
  var comb=combine(withAst);
  var dist=outbound?distribute(p.components, outbound):null;
  return {parse:p, combine:comb, distribute:dist};
}

return {
  LICENSES:LICENSES, BY_ID:BY_ID, UNIVERSE:UNIVERSE, GNU:GNU,
  normalizeId:normalizeId, parseExpr:parseExpr, astToString:astToString, astLics:astLics,
  outboundsOf:outboundsOf, obligationsOf:obligationsOf,
  parseDeps:parseDeps, combine:combine, distribute:distribute, analyze:analyze
};
});
