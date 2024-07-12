import axios from 'axios';
import { Request, Response } from 'express'

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for items
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Keyword to search
 *     responses:
 *       200:
 *         description: A list of search results
 *       400:
 *         description: Keyword query parameter is required
 *       404:
 *         description: When no any result found.
 *       500:
 *         description: Error fetching data from external API
 */
export const searchController = async (req: Request, res: Response): Promise<void> => {
    const searchKey = req.query.q as string;
    const limit = req.query.limit as string;
    const apiUrl = process.env.APP_API_URL;
    if (!searchKey) {
        res.status(400).send({ error: 'search keyword is required' })
        return;
    }

    try {
        await axios.get(`${apiUrl}/artworks/search?q=${searchKey}&limit=${limit || 5}`).then((results) => {
            if (results.status === 200) {
                const { data } = results.data;
                res.status(200).send(data);
            } else {
                res.status(404).send({ error: 'We are unable to get results, please try again.' })
            }
        })
    } catch (error) {
        res.status(400).send({ error })
    }
}