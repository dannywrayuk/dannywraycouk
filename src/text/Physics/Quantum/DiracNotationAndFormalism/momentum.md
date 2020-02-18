## Momentum
<date>6th October 2018</date>
<label>Deriving the expressions for the momentum operator and exploring its properties.</label>
<hr/>

It's at this stage when we start looking at the momentum operator that the mathematics seems to become simpler. This is much less to do with the actual content becoming easier and is mainly becasue the calculations we have done so far have proven things that we can now rely on to make our lives easier. Momentum is the second of the three most important operators for general quantum mechanics and is where we will now focus our attention. Due to the second posutulate, we formulate the equation in the exact same way as $(3.2.1)$ for the postition operator. That is, the eigenvalues of the momentum operator give the measureable value of momentum
$$
\widehat{P}|\psi\rangle=p_0|\psi\rangle \tag{3.3.1}
$$
Looking at it, it's hard to understand why this equation is any different to $(3.2.1)$, just with different letters - and there isn't a difference, but we are trying to find something different here. 
In $(3.2)$ we solved for the position operator in position space (by this I mean we found the position operator as a function of position). If we were to find the momentum operator in momenum space (as a function of momentum) then we would arrive at the exact same result, i.e $\widehat{P} = p$ and that the eigenstates are dirac deltas. The key difference is that here we are trying to find the momentum operator in position space (as a function of position). The mathematics done in the previous section drastically reduces the amount of work required. We want this equation in position space, so we just multiply by the position eigenstates and using $(3.2.9)$ see that
$$
\langle x|\widehat{P}|\psi\rangle=p_0\langle x|\psi\rangle\\
\widehat{P}\psi(x)=p_0\psi(x)\tag{3.3.2}
$$
A simple way to solve this would be to reacall from fourier series any function can be written as a sum of sinwaves. If we solve this equation for a single wave then it should hold for all other functions. This is only possible since we can assume the operator to be linear, due to the second postulate. We shall solve for
$$
\psi(x) = Ae^{ikx}
$$
Where $k$ is the spatial frequency of the wave.
subbing into $(3.2.2)$ the equation we must solve is now
$$
\widehat{P}Ae^{ikx}=p_0Ae^{ikx}
$$
Instantly we can see that $A$ will cancel. Using the De broglie relation $(1.2.3)$ we can now convert the frequency into momentum
$$
\widehat{P}e^{ip_0x \over \hbar}=p_0e^{ip_0x \over \hbar}
$$
Hopefully it is then obvious that the RHS of the equation is just the derivative of $\psi(x)$ multiplied by some constants
$$
\widehat{P}e^{ip_0x \over \hbar}=-i\hbar\frac{d}{dx}\left(e^{ip_0x \over \hbar}\right)
$$
and replacing the wavefunction with $\psi(x)$ gives us the momentum operator in position space
$$
\widehat{P}\psi(x)=-i\hbar\frac{d\psi(x)}{dx}
$$
$$
\widehat{P}=-i\hbar\frac{d}{dx} \tag{3.3.3}
$$
The form of this operator only furthers the point that operators dont usually make sense on their own. This derivation heavily relies on the operator being linear and to be valid we much check it obeys $(3.1.6)$
$$
\begin{aligned}
\widehat{P}(a\psi_1+b\psi_2)&=-i\hbar\frac{d}{dx}(a\psi_1+b\psi_2)\\
&=-ai\hbar\frac{d\psi_1}{dx}-bi\hbar\frac{d\psi_2}{dx}\\
&=a\widehat{P}\psi_1 + b\widehat{P}\psi_2\\
\end{aligned}
$$
From this we can clearly conclude that the operator is linear. Finally we must check it is hermitian using $(3.1.9)$
$$
\begin{aligned}
\left( \langle\psi|\widehat{P}|\phi\rangle \right)^* &= \langle\phi|\widehat{P}|\psi\rangle\\
&=\int_{-\infty}^{\infty}\phi^*(x)\widehat{P}\psi(x)dx \\
&=-i\hbar\int_{-\infty}^{\infty}\phi^*(x)\frac{d}{dx}\psi(x)dx \\
&=\left(i\hbar\int_{-\infty}^{\infty}\frac{d}{dx}\psi(x)^*\phi(x) dx \right)^*
\end{aligned}
$$
Using integration by parts
$$
=\left(i\hbar [\phi(x)\psi(x)^*]_{-\infty}^{\infty} - i\hbar\int_{-\infty}^{\infty}\psi(x)^*\frac{d}{dx}\phi(x) dx\right)^*
$$
using $(3.1.4)$ the evaluated term must be zero
$$
\begin{aligned}
&=\left( - i\hbar\int_{-\infty}^{\infty}\psi(x)^*\frac{d}{dx}\phi(x) dx\right)^*\\
&=\left( \int_{-\infty}^{\infty}\psi(x)^*\widehat{P}\phi(x) dx\right)^*\\
&=\left( \langle\psi|\widehat{P}|\phi\rangle \right)^*
\end{aligned}
$$
Proving that the operator $(3.3.3)$ is hermitian.

This proof of the momentum operator can sometimes seem a little bit underwhelming, it involves assuming that the wavefunction is a sine wave. However I believe it's the most approprite proof at this level. For a more rigorous proof using a general wavefunction see this appendix post [here]('#').


As before, the next stage would be to solve for the eigenstates of the momentum operator. These are the states that have definite values and no uncertainty. Unlike before this is very easy to solve for, since we can use $(3.2.9)$ to turn it into an easier problem. We will call the eigenstates $|p\rangle$. 
$$
\widehat{P}|p\rangle=p_0|p\rangle
$$
Using $(3.2.9)$. In future this step will be missed out as it is almost always the case.
$$
\widehat{P}p(x)=p_0p(x)
$$
Applying the operator $(3.3.3)$
$$
-i\hbar\frac{dp(x)}{dx}=p_0p(x)
$$
Which is a very simple first order ODE that can be solved simply by integrating
$$
\begin{aligned}
-i\hbar\frac{dp(x)}{dx}&=p_0p(x)\\
\frac{1}{p(x)}\frac{dp(x)}{dx}&=\frac{ip_0}{\hbar}\\
\int\frac{1}{p(x)}\frac{dp(x)}{dx}dx&=\int\frac{ip_0}{\hbar}dx\\
\int\frac{1}{p(x)}dp&=\frac{ip_0}{\hbar}x+c\\
\ln{p(x)}&=\frac{ip_0}{\hbar}x+c\\
p(x)&=Ae^{\frac{ip_0x}{\hbar}}
\end{aligned}
$$
This is the form of the momentum eigenstate in position space. It takes the form of a single wave with constant momentum and hence zero uncertatinty in momentum. In diract notation we can write 
$$
\langle x | p \rangle = \exp\left( \frac{ip_0x}{\hbar} \right)
$$
Now that the position and momentum operators have been fully understood, we can move on to using them and how they interact.
