import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: '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' });

const openai = new OpenAIApi(configuration);

export const generateImage = async (req, res) => {
    const { prompt, size } = req.body;

    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize
        })

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            sucess: true,
            data: imageUrl
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            error: "The image could not be generated"
        })
    }
}