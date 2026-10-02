#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "dynamitejobs",
  boardId: "dynamitejobs-official",
  domain: "dynamitejobs.com",
  npmName: "zc-dynamitejobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
