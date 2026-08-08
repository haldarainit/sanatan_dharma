const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetP = '<p class="deva min-h-[1.5em] text-base font-medium tracking-wide text-white/95 sm:text-lg md:text-2xl lg:text-3xl" style="text-shadow:0 2px 12px rgba(0,0,0,0.7)"></p>';
const newP = '<p class="deva min-h-[1.5em] text-base font-medium tracking-wide text-white/95 sm:text-lg md:text-2xl lg:text-3xl" style="text-shadow:0 2px 12px rgba(0,0,0,0.7)">सनातन, संस्कार और समाज के लिए आगे बढ़िए...</p>';

const targetH2 = '<h2 class="deva mt-3 min-h-[1.2em] text-4xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl" style="text-shadow:0 3px 18px rgba(0,0,0,0.75)"></h2>';
const newH2 = '<h2 class="deva mt-3 min-h-[1.2em] text-4xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl" style="text-shadow:0 3px 18px rgba(0,0,0,0.75)">अगर हम नहीं, तो कौन?</h2>';

const targetDiv = '<div class="mt-5 flex min-h-[44px] justify-start sm:mt-7"></div>';
const newDiv = '<div class="mt-5 flex min-h-[44px] justify-start sm:mt-7"><a href="/membership" class="inline-flex items-center justify-center font-bold text-sm text-white h-11 px-6 rounded-full bg-[#FF9933] border border-orange-200/50 shadow-lg hover:bg-[#E6821B] transition-all cursor-pointer">Join Us</a></div>';

html = html.replace(targetP, newP);
html = html.replace(targetH2, newH2);
html = html.replace(targetDiv, newDiv);

fs.writeFileSync('index.html', html);
console.log('Successfully patched index.html with static hero text!');
