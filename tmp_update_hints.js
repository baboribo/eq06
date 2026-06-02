const fs = require('fs');
const path = 'src/lib/gameConfig.ts';
let text = fs.readFileSync(path, 'utf8');
const regex = /"hint":\s*"힌트: .*?발음 단서: (\/[^\/]+\/\.)"/gs;
text = text.replace(regex, (_, pron) => `"hint": "힌트: 발음 ${pron}을 떠올리며 보기 중 가장 자연스러운 뜻을 찾으세요."`);
fs.writeFileSync(path, text, 'utf8');
console.log('hints updated');
