import test from'node:test';import assert from'node:assert/strict';import{access}from'node:fs/promises';import{episodes,agents,builders,filterItems,escapeHTML}from'../src/data.js';
test('Search handles case, category and no results',()=>{assert.equal(filterItems(agents,'NOTEBOOK','Research').length,1);assert.equal(filterItems(agents,'nothingmatches').length,0);assert.equal(filterItems(builders,'','Codex').length,3);});
test('User text cannot inject HTML',()=>assert.equal(escapeHTML('<img src=x onerror="x">'), '&lt;img src=x onerror=&quot;x&quot;&gt;'));
test('All episode images are present and external links use HTTPS',async()=>{for(const e of episodes){await access(`public/assets/${e.image}`);for(const key of ['youtube','spotify','apple'])if(e[key])assert.equal(new URL(e[key]).protocol,'https:');}});
test('Seed slugs are unique',()=>{for(const list of[agents,builders,episodes])assert.equal(new Set(list.map(x=>x.id)).size,list.length);});
