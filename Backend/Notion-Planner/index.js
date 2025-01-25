const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const notionBaseUrl = "https://api.notion.com/v1";
const notionHeaders = {
  Authorization: `Bearer ${process.env.NOTION_SECRET}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

app.post("/create-project", async (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !description || !status) {
    return res.status(400).json({ error: "Missing required fields: title, description, or status" });
  }
  try {
    const response = await axios.post(
      `${notionBaseUrl}/pages`,
      {
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Title: {
            title: [
              {
                text: { content: title },
              },
            ],
          },
          Description: {
            rich_text: [
              {
                text: { content: description },
              },
            ],
          },
          Status: {
            select: { name: status },
          },
        },
      },
      { headers: notionHeaders }
    );
    res.status(201).json({ message: "Project created successfully!", data: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create project on Notion" });
  }
});

app.get("/read-projects", async (req, res) => {
  try {
    const response = await axios.post(
      `${notionBaseUrl}/databases/${process.env.NOTION_DATABASE_ID}/query`,
      {},
      { headers: notionHeaders }
    );

    const projects = response.data.results.map((result) => ({
      id: result.id,
      title: result.properties.Title.title[0]?.text.content || "No title",
      description: result.properties.Description.rich_text[0]?.text.content || "No description",
      status: result.properties.Status.select?.name || "No status",
    }));

    res.status(200).json({ message: "Projects fetched successfully!", projects });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch projects from Notion" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
