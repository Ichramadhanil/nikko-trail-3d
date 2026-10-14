function showTerrain(){document.body.classList.remove('street-mode');if(map)map.resize()}
document.getElementById('show-terrain').onclick=showTerrain;
document.getElementById('show-street').onclick=()=>{pause();document.body.classList.add('street-mode');if(innerWidth<650){document.getElementById('panel').classList.add('closed');document.getElementById('mobile-panel').setAttribute('aria-expanded','false')}};
for(const id of ['stops','nearby','route-select'])document.getElementById(id).addEventListener(id==='route-select'?'change':'click',showTerrain);
document.getElementById('flat-map').onclick=()=>{showTerrain();pause();follow=false;if(map&&ready){map.setTerrain(null);document.getElementById('load-status').textContent='Peta 2D · geometri OpenStreetMap';map.easeTo({pitch:0,bearing:0,duration:500})}document.getElementById('flat-map').classList.add('selected')};
document.getElementById('terrain-map').onclick=()=>{showTerrain();if(map&&ready){map.setTerrain({source:'dem',exaggeration:1});document.getElementById('load-status').textContent='Medan 3D 1× · geometri OpenStreetMap';overview()}document.getElementById('flat-map').classList.remove('selected')};
document.getElementById('modal').addEventListener('close',()=>{document.getElementById('modal-content').innerHTML=''});
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;const msg=document.createElement('p');msg.className='body-copy';msg.textContent='Foto belum dapat dimuat. Buka sumber foto di bawah.';img.after(msg)}));
