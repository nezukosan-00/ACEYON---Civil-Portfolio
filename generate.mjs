import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const FRAMES_DIR = path.resolve('./public/frames');
if (!fs.existsSync(FRAMES_DIR)) {
    fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

async function generateFrames() {
    console.log('Generating 120 placeholder frames...');
    for (let i = 0; i < 120; i++) {
        const textSvg = `
      <svg width="1920" height="1080">
        <rect width="100%" height="100%" fill="#0E0F11" />
        <ellipse cx="960" cy="${540 - (i * 2)}" rx="${100 + i}" ry="${100 + i}" fill="none" stroke="#4F9C8F" stroke-width="2" />
        <line x1="0" y1="540" x2="1920" y2="540" stroke="#2E3238" stroke-width="1" />
        <line x1="960" y1="0" x2="960" y2="1080" stroke="#2E3238" stroke-width="1" />
        <text x="960" y="540" font-family="Arial" font-size="120" fill="#EAEAEA" text-anchor="middle" dominant-baseline="middle">
          Frame ${i}
        </text>
      </svg>
    `;

        await sharp(Buffer.from(textSvg))
            .webp({ quality: 80 })
            .toFile(path.join(FRAMES_DIR, `frame_${i}.webp`));

        if (i % 20 === 0) console.log(`Generated frame ${i}...`);
    }
    console.log('Finished generating frames.');
}

generateFrames().catch(console.error);
