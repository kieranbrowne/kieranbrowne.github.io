---
title: "Counterfactual explanations, fooling images and semantics"
layout: post
tags: 
    - machine learning
---

The counterfactual explanation is a clever way to offer meaningful explanations of algorithmic decisions to those it affects. The concept was introduced to explainable AI in Miller 2018 following the intuition that explanations are contrastive, i.e. "people do not ask why event $$P$$ happened,  but rather why event $$P$$ happened instead  of some event $$Q$$."[^miller2018] This idea was defined more rigourously by Sandra Wachter et al. in 2017 as a suitable form of legally compelled explanation for those subject to algorithmic decision making.[^wachter2018] The paper defines the counterfactual as the minimum changes required to the input data found to produce a desired decision in the model. This can be expressed algebraically as;

<span class="sideline">
"Score $$p$$ was returned because variables $$V$$ had values $$(v_1,
v_2,...)$$ associated with them. If $$V$$ instead had values $$(v_1',
v_2',...)$$, and all other variables had remained constant, score $$p'$$ would
have been returned."</span>

It is also trivial to translate this into something comprehensible to a layperson as in the paper's example of a bank loan;

<span class="sideline">
"You were denied a loan because your annual income was
&pound;30,000. If your income had been
&pound;45,000, you would have been offered a loan."
</span>


Counterfactuals, as the title of the paper suggests, allow for explanations "without opening the black box," or in other words, without needing to know how the algorithm works.

Perhaps surprisingly, the counterfactual as defined by Wachter et al. bears a striking resemblance to the "fooling images" of Nguyen et al. and the string of similar research they inspired.[^nguyen2015]



The idea is summarised in [Wachter's keynote speech at d!talk](https://youtu.be/C6G0faywLiY) and [this WIRED article](https://www.wired.co.uk/article/ai-bias-black-box-sandra-wachter).

## Notes

[^wachter2018]: Wachter, Sandra, Brent Mittelstadt, and Chris Russell. "Counterfactual explanations without opening the black box: Automated decisions and the GDPR." *Harvard Journal of Law and Technology* 31.2 (Spring 2018): 841. ([2017 preprint](https://arxiv.org/ftp/arxiv/papers/1711/1711.00399.pdf))

[^mittlestadt2018]: [Mittelstadt, Brent, Chris Russell, and Sandra Wachter. "Explaining explanations in ai." arXiv preprint arXiv:1811.01439 (2018).](https://arxiv.org/pdf/1811.01439.pdf)

[^miller2018]: Miller, Tim. "Explanation in artificial intelligence: Insights from the social sciences." Artificial Intelligence (2018). ([2017 preprint](https://arxiv.org/pdf/1706.07269.pdf))

[^nguyen2015]: Nguyen, Anh, Jason Yosinski, and Jeff Clune. "Deep neural networks are easily fooled: High confidence predictions for unrecognizable images." In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp. 427-436. 2015.
