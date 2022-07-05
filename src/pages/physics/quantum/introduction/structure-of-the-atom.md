---
title: Structure of the Atom
date: 2018/08/09
abstract: Quantum Theory's answer to the Structure of Atoms.
layout: post
---

As the work done by Einstein, Heisenberg, and Plank was being conducted there was very little understood about the structure of atoms. The idea of atoms had been around for quite some time and they were thought to be a fundamental particle. It was Thompson and Millikan that proved the existence of electrons, meaning atoms were made up of smaller constituent parts. The only other (semi) well established physics surrounding atoms at the time was emission spectra. It was correctly assumed that since hydrogen was the lightest gas that it would be the simplest in structure. Most efforts were focused on trying to understand the spectra of hydrogen first for this reason. The equation for the hydrogen spectra was given by

$$
\frac{1}{\lambda}=R_{\infty}(\frac{1}{k^2}-\frac{1}{n^2}) \tag{1.4.1}
$$

This equation was essentially a brute force fit to the experimental data. If a consistent theory was to arise from quantum mechanics it should dissolve down to this equation, or at least resemble it.

The first model of the atom was proposed by Thompson after he discovered electrons. He suggested a sphere of positive charge that contained an electron within it. The electron would then oscillate due to the electrostatic forces, producing electromagnetic waves. At the time electromagnetism had been well established and all that remained was to calculate the frequency of this oscillation.

The electron is only affected by the positive charge contained within the radius of its offset. If the positive charge $e$ is uniformly distributed in a sphere of radius $R$ and the electron is offset by a radius $r$ then the effective charge acting on the electron is proportional to the fraction of the volume of these two spheres

$$
q=e\frac{r^3}{R^3}
$$

From Coulombs law it is known that the force on the electron is then

$$
F=\frac{-eq}{4\pi\epsilon r^2} \tag{1.4.2}
$$

And combining these two equations gives

$$
F=\frac{-e^2}{4\pi\epsilon R^3}r
$$

A force negatively proportional to displacement is characteristic of a harmonic oscillator, which has one distinct frequency given as

$$
f=\frac{1}{2\pi}\sqrt{\frac{k}{m}}
$$

In our case for the electron

$$
f=\frac{1}{2\pi}\sqrt{\frac{e^2}{4\pi\epsilon m R^3}}=2.5\times10^{15} Hz
$$

In this model the electron acts like a mass on a spring and gives a frequency very close to the ultraviolet frequency emitted by hydrogen. The major downfall of this model is that the electron only oscillates at one frequency and does not account for the rest of the many spectral lines. This model was a step in the right direction, however.

It was the Geiger-Marsden Gold foil experiment that completely threw out Thompsons model. The experiment involved firing alpha particles (ionised helium atoms) at a gold foil. The positive alpha particles would interact with the positive charge in the gold atoms causing a repulsive force. Using the same method as used for the electron previously the force curve can be calculated and is shown in figure $(1.4.1)$. This graph has a maximum point that is dependent on the radius of the positive charge inside the atom $R$. It was expected that the maximum would be reasonably small as the radius of the positive charge would be comparable to the radius of the atom and that the alpha particles would pass through largely unaffected. The observed result couldn't have been more different. Most of the alpha particles went through unaffected but some bounced back at an extreme angle. Using the force that would be required to cause this level of deflection the radius of the nucleus could be calculated thanks to the relationship between the maximum force and the radius. The radius of the positive charge was $10^{5}$ times smaller than the size of an atom. This means that Thompsons prediction of an electron oscillating in positive charge was not possible and that most of the mass and positive charge was concentrated in a nucleus at the centre of the atom.

`[![]([data:figure141])](https://www.desmos.com/calculator/w45hv2vuvm)`
<label>Force on an alpha particle with varying distance.</label>

It was Rutherford that suggested the planetary model of the atom. A heavy nucleus at the centre with smaller electrons orbiting, inspired by the solar system. There were two flaws with the model that couldn’t be explained. The orbits could in principle have any orbital frequency meaning the discrete spectra could no longer be explained and as the energy of the electrons was radiated away the electrons would spiral into the centre.

Niels Bohr took this model and managed to fix the problems of discrete spectra and radiation collapse by introducing the concept of “Stationary States”. His model combined both ideas of the classical planetary model and some new ideas from quantum mechanics such as photons. Stationary states were certain radii that did not radiate. This avoids the radiation collapse as the electrons would stop losing energy once they entered a stationary state. He also proposed that an electron in a high energy state $E_n$ transitioning down into a lower energy state $E_k$ would emit a photon of frequency

$$
hf=E_n-E_k \tag{1.4.3}
$$

This perfectly describes the discrete spectra and the Rydberg formula. All that was left was for Bohr to find a way to determine the stationary states.

The dimensions of Planck’s constant are energy multiplied by time, or, momentum multiplied by distance. These dimensions have significant importance in classical mechanics and are known as “Action”. Bohr suggested that action was quantised in chunks of $h$ just like photons. From this postulation he could write that momentum multiplied by distance (the circumference of the electrons orbit) was some multiple of the Planck constant

$$
mv(2\pi r)=nh
$$

Defining the reduced Planck constant

$$
\hbar=\frac{h}{2\pi} \tag{1.4.4}
$$

he arrive at the simpler expression

$$
mvr=n\hbar \tag{1.4.5}
$$

the left-hand side of this equation is the angular momentum. We say that $\hbar$ is the quanta of angular momentum and that only integer $n$ orbits are “Stationary”. By equating Coulombs law $(1.4.2)$ and the centripetal forces on the electron is can be shown that

$$
mv^2=\frac{e^2}{4\pi\epsilon r}
$$

combining with $(1.4.5)$ the radius can be solved for

$$
r_n=\frac{4\pi\epsilon\hbar^2}{me^2}n^2=a_0n^2 \tag{1.4.6}
$$

where $a_0$ is the Bohr radius and has a value of $5.3\times 10^{-15}m$. Again, resorting back to classical physics Bohr knew the kinetic and potential energy of the electron and therefore its total energy

$$
E=T+U=\frac{e^2}{8\pi\epsilon r}+ \frac{-e^2}{4\pi\epsilon r}=-\frac{e^2}{8\pi\epsilon r}
$$

by substituting $(1.4.6)$ for the radius we arrive at one of the major triumphs of quantum theory

$$
E_n=-\frac{m e^4}{8h^2 \epsilon^2}\frac{1}{n^2}=-13.6\frac{1}{n^2}
$$

The energy of an electron in any stationary orbit was now known and the energy difference between these orbits accurately matched what was observed by the Rydberg formula.

The story doesn’t end quite yet. The idea of an electron jumping between stationary states was quite unsettling at the time and a couple of flaws were pointed out. Why should stationary states not radiate? Would an electron going from $n=3$ to $n=1$ not have to pass through $n=2$? And electromagnetism makes a different prediction and is very well tested. Bohr managed to counter the final point with his Correspondence Principle. He showed that for large $n$ electromagnetism and quantum theory converged on the same result. It took de Broglie to make the final advancement on this semi classical model.

Photons were believed to be waves until quantum theory said they have a strange wave particle duality. De Broglie thought that this could be extended to electrons too. All these models thus far have considered the electron as a particle orbiting the nucleus of the atom. De Broglie suggested that rather than stationary states arbitrarily not radiating, the electron is forming a standing wave around the nucleus. This is promising as classical standing waves can only have discrete energy levels just as required by the electron orbits. If we imagine an ‘electron wave’ oscillating around the nucleus, then there must be an integer number of wavelengths in the orbit otherwise the wave would not connect and be discontinuous. Mathematically this is written

$$
2\pi r = n\lambda
$$

using the photon relation between wavelength and momentum $(1.2.3)$

$$
2\pi r = n \frac{h}{mv}
$$

and recalling $(1.4.4)$ we arrive back at

$$
mvr=n\hbar
$$

by considering electrons to also have wave particle duality the Bohr quantisation law naturally falls out as a consequence without the need for quantised action.

Is there any evidence of this? After the proposal of electrons being waves, the double slit experiment was carried out using electrons. This experiment was used as a key piece of evidence that photons exhibited wave properties. And surely enough, an interference pattern was seen on the screen confirming that electrons also have wave particle duality.
This is as advanced as the Bohr model of the atom gets and is very useful in terms of its predictive power and simplicity, however not complete. The hydrogen atom will be revisited again but under a completely quantum framework.
