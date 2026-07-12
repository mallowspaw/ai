A few notes on what changed structurally, since you'll be running this by hand:

- The Scout's P1_FORCED retry and the Strategist's insufficient_research path are now things you trigger by re-opening a prompt and re-attaching files — there's no Router A/B anymore, you're the router.
- The Critic's revision loop (previously capped at 2 by a Make variable) is now open-ended — you decide when a FAIL is good enough to accept or worth another Ghostwriter pass.
- voice_corpus.md and topic_memory.md are files you maintain yourself (just plain Markdown), and you seed/update topic_memory.md manually after each post the same way the original blueprint's Sheet did — flip status to posted/killed as your publishing ritual.