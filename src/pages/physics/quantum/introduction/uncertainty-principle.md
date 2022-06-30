---
title: The Uncertainty Principle
date: 2018/07/20
abstract: How analysis of the Photon Model lead Heisenberg to the Uncertainty Principle.
layout: post
---

We have seen how the photon model was successful in describing the Photoelectric effect and how the classical intensity on the detector of a double slit experiment corresponds to the probability of a single electron landing in that region. It was Einstein himself who was quite strongly opposed to this notion. The problem was that the probabilistic nature of this system completely undermined the principle of determinism. That is, the initial conditions of a system completely determine the time evolution of the system. If the position on the detector was only defined by a probability, then it cannot be predicted, and violates determinism. Einstein rejected the idea that some systems have elements that are fundamentally probabilistic and was quite vocal about his dislike. It was in this context that the quote "God does not play dice with the universe" was meant.
One way to investigate this problem would be model a photon as a small wave packet mathematically and then follow its path, we could then try and understand the dynamics.

Thanks to the work done by Fourier we know that the form of a wave packet can be constructed using a sum of sine waves. Much more on this can be found in the Classical Mechanics section (at least, it will once I've written it). One fundamental property of sine waves is that

$$
t = \frac{1}{f} \tag{1.3.1}
$$

Since we have many more than one sine wave it's not very useful in its current form. However, the only modification required is to use the standard deviation of the frequencies and periods rather than the specific value corresponding to each wave. This modification leads to

$$
    \sigma( t)=\frac{1}{\sigma( f)} \tag{1.3.2}
$$

This is the starting point of the work done by Heisenberg. Knowing this property of a wave packet meant that it could be used to manipulate the discoveries made by Einstein. Heisenberg first incorporated $E=hf$ into $(1.3.2)$

$$
\begin{aligned}
    1&=\sigma( t) \sigma( f)\\
    &=\sigma(t) \frac{\sigma(E)}{h}\\
    h&=\sigma( E)\sigma(t)
    \end{aligned}
$$

It was at this stage Heisenberg had to try and interpret what he had derived. He found that the ranges should be interpreted as uncertainties and because of this it makes more sense to rewrite the equation as and inequality. This makes sense because you can always be more uncertain on a measurement. Thus we arrive at

$$
\sigma( E)\sigma( t) \ge h \tag{1.3.3}
$$

<label>**The First Heisenberg Uncertainty Principle.**</label>

This version of the uncertainty principle is not as well known as the one we will get to shortly but is just as important. The way this is interpreted is as the uncertainty in time becomes small, the uncertainty in energy becomes very large. This causes some quite strange effects. For instance, for a very small $\sigma(t)$ there can be a very large $\sigma(E)$ that still satisfies $(1.3.3)$. If the ex-pected energy is zero, in a vacuum for example, then this large uncertainty means that we cannot be sure that it is. For a sufficiently short amount of time there are particles and anti-particles jumping into and out of existence that are created out of this energy associated with the uncertainty caused. Weird, huh?

If we push forward we can, in a rather easy step, change this equation into the form we are used to seeing. If we factor out the speed of light from $E$ and then multiply it by $t$ it would give us

$$
    \frac{\sigma( E)}{c}c\sigma(t)  \ge h
$$

We can now use the relationships $p=\frac{E}{c}$ and $x=ct$ and produce the form of the uncertainty principle that you might recognise

$$
\sigma(p)\sigma(x) \ge h \tag{1.3.4}
$$

<label>**The Heisenberg Uncertainty Principle.**</label>

This is the main and most well known form of the principle. It relates an uncertainty in position with an uncertainty in momentum and therefore velocity. We will see later on this is so fundamental that by poking at the laws of quantum mechanics this principle will fall out time and time again.
I should point out, like most people do at this stage, the principle is not a result of measurement tools having associated errors. This is an intrinsic property of the universe. No mattter how hard we try, measurements can never be more precise than what the principle dictates.
