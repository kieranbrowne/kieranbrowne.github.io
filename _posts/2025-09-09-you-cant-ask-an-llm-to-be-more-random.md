---
layout: post
title: "You can't ask an LLM to be \"more random\""
tags:
  - AI
---

> *This post was originally written as an internal memo for my colleagues at Springboards. It was later dressed up as a blog post for general readership. The canonical version can be found at <https://springboards.ai/blog-posts/you-cant-ask-an-llm-to-be-more-random>*

If I had to choose one word to pinpoint what makes large language models (LLMs) amazing I would choose “flexibility.” Whether you’re after a solution to a logic problem, a recipe for brownies or a plot outline for a new space opera, the LLM will almost always be able to offer *something*.

Now, it should go without saying that not every response that comes from an LLM is good. LLMs are often said to “hallucinate” because they report falsehoods and inaccuracies with the same confidence as they report facts. But for many tasks for which we might consult an LLM, “correctness” is simply not a factor. What would it mean, for instance, to “hallucinate” a plot outline for a space opera? Sounds pretty good to me, that’s [how Dune was written](https://thedebrief.org/how-magic-mushrooms-inspired-frank-herberts-dune/). Instead, what is much more significant for judging a space opera proposal, or really any creative task, is how *novel* it is.

How original, different, variable, random are LLM outputs really? I think the answer will surprise you.

## Pick a Random Number Between 1 and 10

Open a fresh thread in an AI assistant of your choosing, ask it to *“Pick a random number between 1 and 10”* and come back with the answer.

You got **7**.

*Surprised?*

In the same thread, ask the model to give you another number between 1 and 10.

You got **3**.

Okay, I’m less sure it was 3; you might have gotten 4 or 5.

How could I possibly know that? Well, in an experiment we conducted earlier this year, we asked several popular AI models that same question 100 times over and tallied the results.

All the models we tested showed a massive bias towards number 7 as the first “random” number offered.

OpenAI’s GPT-4o answered “7” 92/100 times, Anthropic’s Claude 3.5 Sonnet answered “7” 90/100 times and Google’s Gemini 2.0 Flash answered “7” a perfect 100/100 times.

![Column graph showing first number frequency for OpenAI GPT-4o. The number 7 makes up 92% of the first numbers answered, with 4, 3 and 6 making up the remainder.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5be5_AD_4nXcKB8B95OmWHq6Oz-JqZc5hbHtQoCnNAkhF4om3qHB9t07j__ZQ_rlHdn1_uk-kIbK4DSDO6voNgXbxcHg9E0TFEIXYhJu_MNHEjRt03h5atOA-JmFRsKEQTd3OatMMo_tfP6Vt4g.png)

![Column graph showing first number frequency for Anthropic Claude 3.5 Sonnet. The number 7 makes up 90% of the first numbers answered, with 6 and 4 making up the remainder.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5be2_AD_4nXcyuvO-yIwbIp-Ira7t8d6weKAkWlt2UsI5b1TmJWSzA2IYb-DxOzhR5RiRvesgI8DXijqkbh4a-kBW3BiHTJT6yFP8p9ERrrSJM16VremkeN-X3qgjk0EeeHZ4MG3LsuM33G0jiA.png)

![Column graph showing first number frequency for Google Gemini 2.0 Flash. The number 7 makes up 100% of the first numbers answered.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5bdf_AD_4nXcF6IF4xE2_b5UlIvted0djkeniy7KHV09WT8upw--sHJ-J_Z_p-OZe78iroUHe_eLdog6jk_x86Lnwq5jmGtjXrO1VRFiL64v5f22K8hm4H9OszkMPvwj3jhafUKaVBAf7CYOR.png)

When asked for a second “random” number, models show slightly more variability, but across all models almost all of the answers were either 3, 4 or 5;


![Column graph showing second number frequency for OpenAI GPT-4o. 3 and 5 make up the majority responses, with 4, 7 and 8 making up the remainder.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5bee_AD_4nXfAWEqjHCw0VJYv6c6-jqiCX4P91QmTo6jGojiA3_Lubm1EXeYj58GhctG4lpZmPT9dnrKjUFJvz0UaA3i3nFzD7ymtE92I_2klVgtyWmje7pxfIVIJmFZibAnmR4pCHFmJw5Kj.png)

![Column graph showing second number frequency for Anthropic Claude 3.5 Sonnet. 4 is returned just under 50% of the time with 3, 5 and 7 making up the remainder.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5be8_AD_4nXc6SZcKFOuWmdxMOnLQ9SR_Kt1kEOLERUeOPcJpnaWtWI5k07M8XggF8HULjcZcWkNaUrLLwmcxH0vdu6CkNOPpqSpe0XwDcHabXziP3suziqOxsb7IzpGdqoSlULZU_Vo36jfHfQ.png)

![Column graph showing second number frequency for Google Gemini 2.0 Flash. 5 is returned just under 70% of the time with 3 making up the remainder.](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5beb_AD_4nXduYQtoequ0_Hw6JuC86MZMIhgcDGdXgCY7O1qmqRo4i0sJzG3joPEjLhQcNQ9ESQd5aLauH8nWor_7pv8Sqef4Qwtu0PkD2_aW5sK0RwOJ0B8iJzL2D06dvfdyj0RXHHN5ZMWOOg.png)

## Say a completely random word

An LLM, as we have seen, won’t behave “randomly” just because you ask it to. This is true for all open ended questions, not just random number generation.

So what happens when we ask an LLM to "Say a completely random word"? For this experiment we used the OpenAI API to run the prompt against GPT 4o 100 times each at 6 temperature levels and tallied the results;

![Bar graph showing most frequent words generated by GPT-4o in response to the prompt "Say a completely random word." ](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5bf1_AD_4nXe8AEqz7HXL4xEK0mfID062ZtGj6NWdkl8ss0zhvH3fPwYDdy7xOyiaKkW53OaMlbrNQddtigTu0WPdYLKAnujjOdt-8sdSfW5-XZE_oECSH5u0bBYzBg14mAPPJaKUZFxi3qcTEA.png)

The standout performer was “quokka” which GPT 4o offered up “randomly” 155 times; a full quarter of all replies to the prompt. Curiously “platypus”, another Australian animal also made it into the top positions appearing in fourth place with 27 occurrences. This wasn’t an “Australian” version of GPT 4o by the way, I suspect English speaking internet culture, which makes up a large portion of LLM training data, just considers Australian animals to be “more random” than animals of other continents. All in all the top 10 words replied by the model made up more than half of all words suggested.

One of the most surprising results that came out of our experiments was that prompting for more randomness can have the opposite effect. We ran the same experiment as above, but changed the prompt to read; "say a completely random word that I wouldn't be able to predict."

![Bar graph showing most frequent words generated by GPT-4o in response to the prompt "Say a completely random word that I wouldn't be able to predict." ](https://cdn.prod.website-files.com/67204aeb1feda7bd03028ad2/689cdf3e8510fb906d9f5bdc_AD_4nXd3kZ0i2mluHbk_GHxnEz6fw9WLZktje1xATUJKeIh3qbrtwDXWLSWaSNE98Uiftwg2uATxxJ7TEnNOJ8Kfp2P9okMRJprXPE60ZO_CsCed1n2AUt3pLKVji7wce9mvYLnPqiqskw.png)

These results were even more repetitive than the previous experiment. Now “quokka” makes up more than half of the total words just by itself (returned 355 times). It should go without saying that this makes the response *much more predictable.*

## Predictably boring?

So what is happening? You may notice that the “unpredictable” words offered by the model have a certain quality to them. “Snollygoster”, “spelunking” and “flibbertigibbet” have the kind of randomness evocative of a Lewis Carroll poem. “Zephyr”, “ephemeral” and “serendipity” have a literary quality and tend not to show up in common speech. As an Australian and ex-resident of Perth, “quokka” and “platypus” do not sound “random” to me, but that’s a rant for another day.

LLMs are, without getting into the technicalities, trained to say likely things. They are, in essence, a machine designed to predict the most likely next word based on all the previous words provided. This is what an LLM will do regardless of how many words like “random”, “unpredictable” or “chaotic” that you shove into the prompt. So much money, time and effort at the moment is pouring into solving AI’s reliability problem; say the right answer, write the right code, don’t mess up that recipe, don’t hallucinate. But the fundamental problem that LLMs pose for creative tasks is not reliability at all, it is repetition.

It is difficult to see just how repetitive AI assistants are from the vantage of a single user; 7 followed by 3 is a plausible combination of random numbers and “quokka” is a plausible word chosen and random. What you don’t see from the chat thread, is that hundreds of thousands of other people who ask the same question are getting much the same answer. What effect does this have on creativity? Perhaps you can see where I’m going with this.

What would happen if ChatGPT’s 400 million weekly users all asked for creative and original ideas? To find out, we ran the following prompts through GPT 4o 100 times via the OpenAI API and counted the most common responses.

*“Give me a fun idea to get people dancing at a party. Describe the idea in one word.”*

Model responded with “flashmob” 67 out of 100 times.

*“Give me a creative idea for a performance artwork. Describe the idea in one word.”*

Model responded with “metamorphosis” 80 out of 100 times.

*“Give me an original theme for an ad campaign for Nike. Describe the theme in just one word.”*

Model responded with either “unleash” or “unleashed” 73 out of 100 times.

None of these answers are wrong, or bad, (okay, maybe the flashmob). In general the quality of the creative suggestion we get out of LLM is perfectly fine. The problem is that LLMs seem to have an extremely limited range, even when asked open-ended questions. To a single user, this is almost invisible. Meanwhile the world is slowly turning beige.

This is what we mean when we say Springboards is optimising for variation. This is why we continue to optimise for variation. Because creativity needs diversity and novelty to thrive.
