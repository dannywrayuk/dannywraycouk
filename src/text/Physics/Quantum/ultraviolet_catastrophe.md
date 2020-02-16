## The Ultraviolet Catastrophe
26th June 2018
Max Planck's accidental discovery of the quantisation of energy.


When being introduced to Quantum mechanics it's quite common to follow the discoveries chronologically and watch how quantum theory slowly develops quite naturally. Eventually it becomes obvious that quantum mechanics is the best explanation of particles on small scales. The story of quantum mechanics starts with the discovery made by Max Planck in the 1890's.

Planck was a young German physicist and had been commissioned by an engineering firm to try and optimise the efficiency of light bulbs. The problem was that bulbs were emitting lots of their energy in wavelengths not visible to the human eye and was thus being wasted. To optimise this system Planck first had to develop the physics that would describe it. At the time there were very robust theories of Thermodynamics and Electromagnetism, this problem was one that bridged the gap.  
  
If we think about the behaviour of the particles in the bulb then we can quite quickly see what is happening. The free electrons in the filament effectively act like a charged gas. As the electrons gain kinetic energy through the heating of the filament they are accelerated and this acceleration in turn produces an electromagnetic wave. Of course, it would be silly try and explicitly calculate the waves from every single particle in the bulb as this is an enormous number, so Plank invoked the use of statistical mechanics and built upon the work of Boltzmann. The part of key interest is the Boltzmann Distribution

$$ P(E)=\frac{1}{Z} e^{-\frac{E}{kT}} \tag{1.1.1}$$

This distribution effectively cuts out all those calculations and instead tells us the probability of a particle having a given energy. Plank wasn't the first person to try and calculate the spectrum given off by hot objects, at the time the best theory was the Rayleigh-Jeans Law

$$ I(f) = \frac{2f^2}{c^2}  kT \tag{1.1.2}$$

The origin of the terms in this equation come from thermodynamics. The ${2f^2}/{c^2}$ comes from the energy density of modes and $kT$ is the average energy of a particle in the system. This is explained in much more detail in the thermodynamics section. At the time classical physics dictated that the average energy of a particle in a gas was $\langle{E}\rangle=kT$, as shown in $(1.1.7)$. However this predicted a completely wrong result, dramatically called "The Ultraviolet Catastrophe". This is because the Rayleigh-Jeans law predicts that as frequency increases the intensity increases quadratically. There had to be a mechanism that would cause the intensity to drop down to zero at high frequencies.


To understand how Planck made his discovery it's helpful to recap how the average energy of a classical Boltzmann distribution is calculated. We let $E=n\epsilon$ with the intention of $\epsilon \to 0$ so that all the values of energy can be accessed as a multiple of $n$ and then we sum over all $n$ to sum over $E$.
$$
\begin{align}
P(E)&=\frac{1}{Z}e^{-\frac{E}{kT}} \tag{1.1.3}\\
&=\frac{1}{Z}e^{-\frac{n\epsilon}{kT}}\\
\end{align}  
$$
Normalizing the function requires
$$
\begin{align}
\sum_n^\infty P(n\epsilon)&=1\\
\sum_n^\infty \frac{1}{Z}e^{-\frac{n\epsilon}{kT}}&=1 \\
Z&=\sum_n^\infty e^{-\frac{n\epsilon}{kT}}\\
Z&=\frac{1}{1-e^{-\frac{\epsilon}{kT}}} \tag{1.1.4}
\end{align}  
$$
Combining $(1.1.3)$ and $(1.1.4)$ leaves us with our general distribution 
$$
    P(n\epsilon)=(1-e^{-\frac{\epsilon}{kT}})e^{-\frac{n\epsilon}{kT}} \tag{1.1.5}
$$
Now we can find the average of this distribution 
$$
\begin{align}
\langle{E}\rangle &= \sum_E EP(E)\\
&= \sum_n^\infty (n\epsilon)P(n\epsilon)\\
&= \sum_n^\infty (n\epsilon)(1-e^{-\frac{\epsilon}{kT}})e^{-\frac{n\epsilon}{kT}}\\
&=\frac{\epsilon}{e^{\frac{\epsilon}{kT}}-1} \tag{1.1.6}
\end{align}  
$$
Finally taking $\epsilon \to 0$ to make every value of $E$ accessible
$$
\begin{align}
\langle{E}\rangle &= \lim_{\epsilon \to 0} \frac{\epsilon}{e^{\frac{\epsilon}{kT}}-1}\\
&=kT \tag{1.1.7}
\end{align} $$

The steps taken by Planck were very similar to the steps just taken. Only Planck said, suppose that $\epsilon = hf$, that energy is proportional to frequency by some constant. Then we will use $h$ in place of $\epsilon$ and instead let $h \to 0$. All the steps are exactly the same up to $(1.1.6)$ where we say
$$
\begin{align}
\langle{E}\rangle &=\frac{\epsilon}{e^{\frac{\epsilon}{kT}}-1}\\
&=\frac{hf}{e^{\frac{hf}{kT}}-1} \tag{1.1.8}
\end{align}  
$$
Taking the limit
$$
\begin{align}
\langle{E}\rangle &= \lim_{h \to 0} \frac{hf}{e^{\frac{hf}{kT}}-1}\\
&=kT \tag{1.1.9}
\end{align} $$

And we arrive at a rather dull result. Letting the energy be proportional to the frequency gave us the exact same value as before and it feels a little bit like we made no progress. However, this is where Planck asked a weird question. What if $h$ is not equal to $0$?



If we suppose that $h$ is equal to some constant then the form for the average energy remains as $(1.1.8)$ and does not reduce to $kT$. We can then sub this into equation $(1.1.2)$, just like we did to find the Rayleigh-Jeans law, in place of kT.
$$
I(f) = \frac{2f^2}{c^2} \frac{hf}{e^{\frac{hf}{kT}}-1} \tag{1.1.10}
$$



<b><label>Planck's Law - 1900</label></b>

This is the final equation that Planck arrived at. Using experimental data, he fine-tuned his answer to find that $h=6.626 \times 10^{-34}$ which we now call 'Plancks Constant'. The accuracy of this model was completely undeniable. The curve perfectly fits the observed intensity values. It's not the accuracy of the result that is most breath-taking here, however, it's that to arrive at this result we had to let $E = nhf$. Since we no longer let $h \to 0$ it follows that when we do the sum over all $n$ that not every value of $E$ is accessed since there are finite gaps of size $hf$ between them. This is the literal quantisation of energy and where Quantum Mechanics gets it's name.



At first it was believed that this was just a mathematical tool used to get the result, like the way $\epsilon$ was used originally. As debate of the topic went on, it became clearer that energy wasn't the continuous quantity it was once believed to be. Energy came in small chunks, and while trying to optimise a light bulb Planck had measured their size.
