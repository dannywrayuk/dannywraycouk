## Time Dependence and Probability Current
17th August 2018
How Stationary States can evolve with time and the idea of Probability Current


Bohr's idea of stationary states refers to a state in which the probability function of a system is stationary. This does not mean that the wavefunction itself must be stationary. The time evolution of a stationary state wavefunction can be derived as shown.

We start with the Schrodinger Equation $(1.5.6)$
$$
i\hbar\dot{\psi}=\frac{-\hbar^2}{2m}\nabla^2\psi +V\psi
$$
If we assume that the wavefunction is a separable function of the form
$$
\psi(x,t)=q(x)T(t) \tag{2.1.1}
$$
Then the Schrodinger equation becomes
$$
i\hbar\frac{\partial}{\partial t}[q(x)T(t)]=\frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}[q(x)T(t)] +V[q(x)T(t)]
$$
By taking terms that are independent out of the differential
$$
i\hbar q(x)\frac{\partial}{\partial t}T(t)=\frac{-\hbar^2}{2m}T(t)\frac{\partial^2}{\partial x^2}q(x) +V[q(x)T(t)]
$$
And dividing by $(2.1.1)$
$$

i\hbar \frac{1}{T(t)}\frac{\partial}{\partial t}T(t)=\frac{-\hbar^2}{2m}\frac{1}{q(x)}\frac{\partial^2}{\partial x^2}q(x) +V \\ \text{(2.1.2)}

$$
Since the LHS depends only on $t$ and the RHS only on $x$ they must both be equal to a constant. If we name this constant E then focusing on the RHS
$$
\frac{-\hbar^2}{2m}\frac{1}{q(x)}\frac{\partial^2}{\partial x^2}q(x) +V=E
$$
Multiplying by $q(x)$ we recover the Time Independent Schrodinger Equation $(1.5.5)$
$$
\frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}q(x) +Vq(x)=Eq(x)
$$
Confirming our choice of $E$ as the constant was correct. Now moving back to the LHS of $(2.1.2)$ we have
$$
i\hbar \frac{1}{T(t)}\frac{\partial}{\partial t}T(t)=E
$$
The solution of this equation will give the time evolution of any wavefunction in the form $(2.1.1)$. It also happens that this is a very easy differential equation to solve. By dividing by $i\hbar$ and integrating both sides with respect to $t$
$$
\int\frac{1}{T(t)}\frac{\partial T(t)}{\partial t}dt=\int\frac{E}{i\hbar}dt
$$
With the solution
$$
\ln{T(t)}=\frac{-it}{\hbar}E
$$
Finally raising $e$ to the power of both sides to remove the natural log we obtain the final expression for the time evolution of a stationary state as
$$
T(t)=\exp{\left(\frac{-it}{\hbar}E \right)} \tag{2.1.3}
$$
Meaning the wavefunction of a stationary state is now
$$
\psi(x,t)=q(x)\exp{\left(\frac{-it}{\hbar}E \right)}\tag{2.1.4}
$$
It's interesting to note that this is a periodic function with an angular frequency of $\omega = E/\hbar$ which rearranging recovers the plank relationship $E=hf$.
We can also confirm that this leaves the probability function stationary by calculating $|\psi|^2$
$$
\begin{aligned}
|\psi|^2&=\psi\psi^*=q(x)T(t)q(x)^*T(t)^*\\
		&=|q(x)|^2T(t)T(t)^*\\
		&=|q(x)|^2 \exp{\left(\frac{-it}{\hbar}E \right)}\exp{\left(\frac{it}{\hbar}E \right)}\\
|\psi|^2&=|q(x)|^2
\end{aligned}
$$
Which clearly has no time dependence since $|T(t)|^2=1$. This is the mechanism by which the wavefunction of a stationary state is not, well, stationary.



The idea of probability current crops up from time to time so I thought I'd throw this onto the end here. Probability current is particularly useful when investigating whether a particle is reflected or transferred through a barrier. It is defined as the probability a particle crosses a point $x$ in the positive direction. We eventually wish to find a function that satisfies
$$
\frac{\partial P(x,t)}{\partial t}+\frac{\partial J(x,t)}{\partial x}=0 \tag{2.1.5}
$$
We start by using the chain rule and $P(x,t)=\psi\psi^*,(1.5.7)$
$$
\frac{\partial P(x,t)}{\partial t}=\psi\frac{\partial \psi^*}{\partial t}+\psi^*\frac{\partial \psi}{\partial t}
$$
Using the time dependent Schrodinger Equation $(1.5.6)$
$$
\frac{\partial \psi}{\partial t}=\frac{i\hbar}{2m}\frac{\partial^2}{\partial x^2}\psi -\frac{i}{\hbar}V\psi
$$
Subbing in
$$
\frac{\partial P(x,t)}{\partial t}=\psi^*\left(\frac{i\hbar}{2m}\frac{\partial^2}{\partial x^2}\psi -\frac{i}{\hbar}V\psi\right)+\psi\left(\frac{-i\hbar}{2m}\frac{\partial^2}{\partial x^2}\psi^* +\frac{i}{\hbar}V\psi^*\right)
$$
Which simplifies to
$$
\frac{\partial P(x,t)}{\partial t}=\frac{i\hbar}{2m}\left(\psi^*\frac{\partial^2 \psi}{\partial x^2}-\psi\frac{\partial^2 \psi^*}{\partial x^2}\right)
$$
And we can finally find the probability current by subbing back into $(2.1.5)$
$$
-\frac{\partial J(x,t)}{\partial x}=\frac{i\hbar}{2m}\left(\psi^*\frac{\partial^2 \psi}{\partial x^2}-\psi\frac{\partial^2 \psi^*}{\partial x^2}\right)
$$
Then integrating with respect to $x$
$$
J(x,t)=-\frac{i\hbar}{2m}\left(\psi^*\frac{\partial \psi}{\partial x}-\psi\frac{\partial \psi^*}{\partial x}\right) \\ \text{(2.1.6)}

$$
This is the general form of the probability current and we may utilise it again later on in some scattering problems.
