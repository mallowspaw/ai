Act as an Expert Prompt Engineer and System Architect. I have a blueprint for a 4-Agent LinkedIn Content MAS (Multi-Agent System) that was originally designed for a fully automated API workflow (e.g., Make.com/n8n with JSON inputs and outputs). 

I need to pivot this architecture to a **strictly manual, human-in-the-loop workflow** using Claude's web interface (leveraging file uploads and Artifacts). I will execute the prompts myself, step by step, and hand over the results from one agent to the next.

Your task is to rewrite the 4 System Prompts (Scout, Angle Strategist, Ghostwriter, Critic) to perfectly fit this manual file-based workflow.

**Strict Execution Rules for the Prompts:**
1. **Kill the JSON:** Remove all requirements for JSON outputs. The agents must now output structured, highly readable Markdown intended for a human editor.
2. **Artifact Generation / File Outputs:** Instruct each agent to output its final result as a distinct Markdown file/Artifact (e.g., `1_Scout_Research.md`, `2_Angle_Brief.md`, `3_Ghostwriter_Draft.md`, `4_Critic_Report.md`). This allows me to easily download it and attach it to the next prompt.
3. **Explicit File Inputs:** Change the "Input" sections of every prompt to reflect that I will be attaching files. (e.g., Tell the Strategist: "The user has attached `1_Scout_Research.md` and `topic_memory.md`. Read them first.").
4. **Embed the Ban List:** Take the "SHARED BAN LIST" from Section 2 of the blueprint and hardcode it entirely into the prompts for both the Ghostwriter and the Critic. I do not want to paste it manually every time.
5. **Strip API Clutter:** Remove all references to Make.com, n8n, API routers, HTTP calls, loop limits, or temperature settings. Keep the pure editorial logic and scoring rules intact.

Please output the 4 completely revised, ready-to-copy System Prompts in separate code blocks. 

Here is the original blueprint to base your work on:

[FÜGE HIER DEN KOMPLETTEN TEXT DES URSPRÜNGLICHEN BLUEPRINTS EIN]