---
id: schrodingers_equation
title: Schrodinger's Equation
date: 2018/08/15
abstract: The wave formulation of quantum mechanics.
layout: post
---

Motivated by de Broglie’s work on the wave particle duality of the electron, in 1926, Erwin Schrodinger sought a general equation of 'electron waves' that could be applied in different scenarios and predict the behaviour of electrons. To do this he first considered a classical wave equation.

A classical wave equation uses vector calculus to take the state of a field and then describe how this field will evolve over time. The most simplistic version of this is the Laplace equation

$$
\nabla^2\psi=0 \tag{1.5.1}
$$

The $\nabla^2$ in this equation is the Laplacian operator and is related to the second derivative in each dimension of the field. Using the approximation of the operator

$$
\nabla^2\psi \approx \frac{6}{a}(\psi_{av}-\psi) \tag{1.5.2}
$$

It can be shown the Laplace equation is satisfied when every point on the field is equal to the average of its neighbours. This is the exact definition of a field in equilibrium. An example of this is soap films in a loop of metal. For a square wire the soap film is flat, but if the wire is bent then the soap film will form a smooth curve between the wires that obeys the Laplace equation. This equation has no time dependence, however. This is because the fields that it describes are stationary and do not change with time. But if one of these fields that it describes was to be perturbed from its equilibrium then the equation would no longer be applicable and requires modification.

A point perturbed from equilibrium will feel a force toward equilibrium. We can write that the acceleration is proportional to the difference between the position and the equilibrium position, or, the Laplacian

$$
\nabla^2\psi \propto \ddot{\psi}
$$

The constant of proportionality turns out to be the wave velocity squared

$$
c^2\nabla^2\psi =\ddot{\psi} \tag{1.5.3}
$$

This is the general case for the classical wave equation. To transition across to the quantum mechanical version we must first become more specific and find the equation for a single frequency.
A wave with a single frequency $f$ has the equation

$$
\psi=A\sin(2\pi f t) \tag{1.5.4}
$$

Its second derivative is then

$$
\ddot{\psi}=-A(2 \pi f)^2\sin(2 \pi f t)=-(2 \pi f)^2\psi
$$

Equating these and substituting $(1.5.3)$ and $c=\lambda f$ we arrive at the Helmholtz wave equation for a single frequency

$$
\nabla^2\psi + \left(\frac{2\pi}{\lambda}\right)^2\psi=0
$$

This equation was well known in Schrodinger’s time and the largest amount of the work was already done. All that remained was to convert this classical wave equation into a quantum mechanical equation. The first thing Schrodinger did was take the relationship between momentum and wavelength of an electron $(1.2.3)$ (or indeed anything that exhibits a wave particle duality) and make a substitution into the Helmholtz equation

$$
\nabla^2\psi + \left(\frac{2\pi p}{h}\right)^2\psi=0
$$

Then the definition of the reduced planck constant $(1.4.4)$

$$
\nabla^2\psi + \frac{p^2}{\hbar^2}\psi=0
$$

The momentum term can then be expanded

$$
p^2=(mv)^2=2m(\frac{1}{2}mv^2)
$$

This form of the momentum contains an expression for the kinetic energy of a particle and can be written as the total energy minus the potential energy

$$
p^2=2m(\frac{1}{2}mv^2)=2mK=2m(E-V)
$$

Schrodinger then subbed this in, arriving him at the single frequency form of his equation

$$
\nabla^2\psi + \frac{2m(E-V)}{\hbar^2}\psi=0
$$

It is common to rearrange this equation into a more satisfying form that resembles $E=K+V$

$$
E\psi=\frac{-\hbar^2}{2m}\nabla^2\psi +V\psi \tag{1.5.5}
$$

<label>**The Time Independent Schrodinger Equation**</label>

This equation is one of the most well tested equations in all of physics. We will see later how the single frequencies that it describes perfectly correspond to Bohr’s stationary states and every other quantum mechanical calculation applies this equation at some level. However, just like the Helmholtz equation it was derived from it only describes a single frequency and can be made more general.

To start we can replace the energy in the equation with the Einstein equation $E=hf$

$$
hf\psi=\frac{-\hbar^2}{2m}\nabla^2\psi +V\psi
$$

If we then consider the first derivative of $(1.5.4)$ our single frequency wave we see

$$
\dot{\psi}=2 A \pi f \cos(2 \pi f t)
$$

Which would give us $f\psi$ if there was a sine rather than a cosine. To satisfy we need some mechanism of having the cosine be converted into a sine. What follows is one of the most perplexing parts of the wave formulation.

Let our single frequency wave be given by

$$
\psi=A\sin(2\pi f t)+Ai\cos(2\pi f t)
$$

Where $i=\sqrt{-1}$ the imaginary unit. Then the first derivative is

$$
\dot{\psi}=A(2\pi f)\cos(2 \pi f t)-Ai(2\pi f)\sin(2 \pi f t)
$$

Multiplying through by $i\hbar$ we find

$$
i\hbar\dot{\psi}=Ai\hbar(2\pi f)\cos(2 \pi f t)-Ai^2\hbar(2\pi f)\sin(2 \pi f t)
$$

Simplifying to

$$
i\hbar\dot{\psi}=Aihf\cos(2 \pi f t)+Ahf\sin(2 \pi f t)\\
i\hbar\dot{\psi}=hf\psi=E\psi
$$

Giving us

$$
i\hbar\dot{\psi}=\frac{-\hbar^2}{2m}\nabla^2\psi +V\psi \tag{1.5.6}
$$

<label>**The Time Dependent Schrodinger Equation**</label>

The general form of the Schrodinger equation explicitly involves the imaginary unit and requires that the ‘electron wave’ has an imaginary component. Imaginary units were invented by mathematicians because they were useful for solving certain types of equations, this was the first time they were ever seen in a physical model of reality. This caused much debate in the scientific community. Luckily these imaginary units can never be measured. Neither can $\psi$, this became known as the 'wave function' and is only a mathematical description of the particles. It was possible to measure something known as the probability density of a wave

$$
p(x)=|\psi|^2=\psi\psi^* \tag{1.5.7}
$$

The square of the wavefunction is real valued and gives the probability of finding the particle in any given position. Like Einstein initially Schrodinger disliked the idea of probability governing physical law and thought maybe the square of the wavefunction was the physical distribution of the matter and the mass of the electron was spread out throughout space. Eventually though experimental data showed that it does in fact represent probability, explaining the interference pattern seen by single electrons through the double slit experiment. Due to the nature of probability this also caused the normalization condition

$$
\int_{-\infty}^{\infty}|\psi|^2dx=1 \tag{1.5.8}
$$

Since the particle has to be somewhere. There are two more requirements physicists like to have on a wavefunction to make it 'Physical', these are that

_A wavefunction and the wavefunctions first derivative are required to be continuous at everypoint for the wave function to be physical._

The Schrodinger Equation is possibly the most important equations in quantum mechanics and will be used in many, many more contexts.

---

A small aside would be to show why the second form of the Schrodinger equation is more general than the first. It affectively boils down to the fact that the first form requires knowledge of the total energy before it can be used whereas the second does not. Consider a wave of 2 frequencies

$$
\psi = \psi_1 +\psi_2
$$

Using the time dependent schrodinger equation we have

$$
\begin{aligned}
i\hbar\dot{\psi}&=i\hbar\dot{\psi_1}+i\hbar\dot{\psi_2}\\
				&=E_1\psi_1+E_2\psi_2
\end{aligned}
$$

The liniarity of differentiation splits up the two frequencies and gives them their own distinct energy and from Fourier theory we know that this is true for any wave made up of any number of frequencies, however

$$
E\psi \ne E_1\psi_1+E_2\psi_2
$$

which means by using the time dependent equation we are effectively solving the time independent equation for every frequency that makes up the wave.
