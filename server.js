import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/generate', async (req, res) => {
  const { logo, apparel, brandingType, brandingPosition, brandingSize } = req.body;
  if (!logo || !apparel || !brandingType || !brandingPosition || !brandingSize) {
    return res.status(400).json({ error: 'Missing logo, apparel, branding type, position, or size' });
  }
  try {
    const prompt = `Create a product mockup of a ${apparel} featuring the supplied logo. Apply ${brandingType} branding on the ${brandingPosition} at size ${brandingSize}.`;
    const response = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      image: [
        {
          type: 'input_image',
          image: logo,
        },
      ],
      size: '512x512',
    });
    res.json({ image: response.data[0].url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
