// shared JS
function randChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function randAmount(){ const pool=[200,300,500,700,800,1200,1500,2500,3000,3500]; return randChoice(pool); }
function randId(){ return 'USR'+(1000+Math.floor(Math.random()*9000)); }
function randTxn(){ const s='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let t='TX'; for(let i=0;i<8;i++) t+=s[Math.floor(Math.random()*s.length)]; return t; }
function makeWithdrawals(total){
  const arr=[]; for(let i=0;i<total;i++){ arr.push({id:randId(),txn:randTxn(),amount:randAmount()}); } return arr;
}
