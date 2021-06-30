---
title: Structure of the Atom
date: 9th August 2018
description: Quantum Theories answer to the Structure of Atoms.
indexTag: thoughts
---

<StandardLayout showLogo showFooter sideMargin>

This is the next simplest potential that the Schrödinger equation can be solved for after the free particle and builds upon the free particle solution. This solution is complete and unlike the free particle all the variables can be solved for rather than some having any arbitrary value. The first step in this solution is to construct the potential. The potential will have a box shape with the sides being infinitely tall. Our potential can be defined as a piecewise function

$$
V(x)=
\begin{aligned}
	\begin{cases}
		&0 		\quad 	&0 \lt x \lt L\\
		&\infty 	\quad	&\text{otherwise}
	\end{cases}
	\end{aligned}\tag{2.3.1}
$$

Interestingly, we don't need to solve the Schrödinger equation for this potential. All this potential does is take the free particle solution $(2.2.5)$ and impose boundary conditions onto it. This is because inside the box the Schrödinger equation is just that of a free particle as the potential is zero. Outside the box the wavefunction must be zero as there is infinite potential energy, this would require infinite kinetic energy to overcome. Knowing this we can write down a none specific solution using the free particle solution $(2.2.5)$

<div className="[style:largeEquation]">

$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&Ae^{ikx}+Be^{-ikx} 		\quad 	&0 \lt x \lt L\\
		&0						\quad	&\text{otherwise}
	\end{cases}
	\end{aligned} \tag{2.3.2}
$$

</div>

Knowing that the wavefunction is zero in the corners of the box we can write

$$
\psi(0)=\psi(L)=0
$$

Subbing in the inside piece of the wavefunction

$$
Ae^{ik(0)}+Be^{-ik(0)}=0\\
Ae^{ikL}+Be^{-ikL}=0
$$

The first equation obviously simplifying to

$$
A+B=0
$$

Then using this to eliminate $B$ in the second equation

$$
Ae^{ikL}-Ae^{-ikL}=0
$$

Since this is equal to zero $A$ can be taken out as a factor and cancelled. Multiplying through you can see that $k$ must be the solution to

$$
e^{2ikL}-1=0
$$

By solving this we recover that the frequency is quantised. This is exactly what we saw when de Broglie used classical waves to describe the electron orbitals.

$$
k=\frac{\pi n}{L} , n \in \mathbb{N} \tag{2.3.3}
$$

This kind of quantisation crops up all the time in quantum mechanics, hence the name, and the number of these 'quantum numbers' is usually the same as the number of dimensions being considered in the problem. Now we have these two results from the boundary conditions we can sub them into $(2.3.2)$

$$
\psi(x)_{inside}=Ae^{i\frac{\pi n x}{L}}-Ae^{-i\frac{\pi n x}{L}}
$$

Using the complex identity of Sine, the wavefunction can be written

$$
\psi(x)_{inside}=A\sin \left( \frac{\pi n x}{L} \right)
$$

Note that there should be a factor of $2i$ but it has been absorbed into the constant $A$. Finally, we can use the normalisation condition for probabilities $(1.5.8)$ to calculate the value of $A$

$$
1=\int_{-\infty}^{\infty}|\psi|^2 dx=\int_{0}^{L}A^2\sin^2 \left( \frac{\pi n x}{L} \right) dx
$$

Since $A$ is a constant we can take it outside of the integral

$$
\int_{0}^{L}\sin^2 \left( \frac{\pi n x}{L} \right) dx=\frac{1}{A^2}
$$

Solving this integral we have

$$
\frac{1}{A^2}=\frac{L}{2}
$$

Finding $A$ as

$$
A=\sqrt{\frac{2}{L}}\tag{2.3.4}
$$

And we can write down the final form of the wavefunction

<div className="[style:largeEquation]">

$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&\sqrt{\frac{2}{L}}\sin \left( \frac{\pi n x}{L} \right)		\quad 	&0 \lt x \lt L\\
		&0						\quad	&\text{otherwise}
	\end{cases}
	\end{aligned} \tag{2.3.5}
$$

</div>

[![]([data:figure231])](https://www.desmos.com/calculator/ooizwuua1f)

A plot of the wavefunction.

All that remains is to calculate the energy of the states for each value of the quantum number $n$ and this is just a case of putting $(2.3.3)$ into the energy of a free particle $(2.2.7)$

$$
E_n=\frac{\hbar^2(\frac{\pi n}{L})^2}{2m}=n^2\frac{h^2}{8mL}=n^2E_1 \tag{2.3.6}
$$

An interesting observation is that even in the lowest energy level the particle still has energy, since $n=1$ in the lowest state, this means in an infinite potential well the particle can never be still and always has 'zero point' energy.

</StandardLayout>
