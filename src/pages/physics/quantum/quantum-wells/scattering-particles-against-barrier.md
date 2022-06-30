---
title: Scattering Particles Against a Barrier
date: 2018/09/03
abstract: The Behaviour of Particles Against a Barrier Potential.
layout: post
---

The final potential in this section on boxed shaped potentials is going to be the barrier potential. This potential takes the form of an inverted finite box. Again, it's going to be defined piecewise and has the form

$$
 V(x)=
 \begin{aligned}
	\begin{cases}
		&V_0 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&0 	\quad	&\text{otherwise}
	\end{cases}
	 \end{aligned} \tag{2.6.1}
$$

Just like the finite box potential the solution will have bounded and unbounded states, the bounded leading to some cool quantum mechanical effects. To begin we will focus on the unbounded states. If we take the case where the particles start on the left and are traveling to the right, unless the particles are reflected off the barrier they should not be travelling to the left. With this in mind and defining $r$ and $t$ as reflection and transmission probability amplitudes we can write the generic wavefunction as

$$
 \psi(x)=
 \begin{aligned}
	\begin{cases}
		&e^{ikx} + re^{-ikx}		 \quad	&x<-\frac{L}{2}\\
		&Ae^{iqx} + Be^{-iqx} 		 \quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&te^{ikx}  		 \quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned}\tag{2.6.2}
$$

Where the left moving term has been eliminated on the right side of the barrier. Using the physical requirements of a wavefunction we require that wavefunctions and their derivatives are continuous at the boundries between regions. This leads to the four equations

$$
e^{-ik\frac{L}{2}} + re^{ik\frac{L}{2}}	= Ae^{-iq\frac{L}{2}} + Be^{iq\frac{L}{2}}
$$

$$
ike^{-ik\frac{L}{2}} - ikre^{ik\frac{L}{2}}	= iqAe^{-iq\frac{L}{2}} - iqBe^{iq\frac{L}{2}}
$$

$$
Ae^{iq\frac{L}{2}} + Be^{-iq\frac{L}{2}} = te^{ik\frac{L}{2}}
$$

$$
iqAe^{iq\frac{L}{2}} -iqBe^{-iq\frac{L}{2}} = ikte^{ik\frac{L}{2}}
$$

To help solve, it is convinient to define $z=e^{ik\frac{L}{2}}$ and $y=e^{iq\frac{L}{2}}$. The equations then become much simpler

$$
\frac{1}{z}+rz=\frac{A}{y}+By
$$

$$
ik\left(\frac{1}{z}-rz\right)=iq\left(\frac{A}{y}-By\right)
$$

$$
Ay+\frac{B}{y}=tz
$$

$$
ik\left(Ay-\frac{B}{y}\right)=iktz
$$

By eliminating $A$ and $B$ we find

$$
A=\frac{(q+k)tz}{2qy}=\frac{y}{2q}\left(\frac{(q+k)}{z}+(q-k)rz \right)
$$

$$
B=\frac{y(q-k)tz}{2q}=\frac{1}{2qy}\left(\frac{(q-k)}{z}+(q+k)rz \right)
$$

Finally with these two equations we can solve them for $r$ and $t$

$$
t=e^{-ikL}\frac{4kq}{4kq\cos(qL)-2i(q^2+k^2)\sin(qL)}
$$

$$
r=e^{-ikL}\frac{2i(q^2-k^2)\sin(qL)}{4kq\cos(qL)-2i(q^2+k^2)\sin(qL)}
$$

The last step would be to find the relationship between $r$ and $t$. This can be done through either analysis of their experssion or using the probability current. Using the definition of the probability current it can be shown that

$$
 J(x)=
 \begin{aligned}
	\begin{cases}
		&\frac{1}{2\pi}(1-|r|^2)		 \quad	&x<-\frac{L}{2}\\
		&\frac{1}{2\pi}(|A|^2-|B|^2)  \quad &-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&\frac{1}{2\pi}|t|^2  		 \quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned}
$$

Due to the conservation of current these two cases can be equated giving

$$
|t|^2=1-|r|^2
$$

Since we defined $T=|t|^2$ and $R=|r|^2$ as the probabilites of reflection and transmission it makes perfect physical sense. To make the expressions for $r$ and $t$ more useful we can square them and use the energy of a free particle and show

$$
T=|t|^2=\frac{1}{1+\frac{V_0^2}{4E(E-V_0)}\sin^2(qL)}
$$

$$
R=|r|^2=\frac{\frac{V_0^2}{4E(E-V_0)}\sin^2(qL)}{1+\frac{V_0^2}{4E(E-V_0)}\sin^2(qL)}
$$

These equations are particurlaly useful as they depend on the two knowns of the system and give results of two variables that can be experimentally measured. If we wish to look at a plot of the wavefunction on a graph we must write the entire wavefunction in terms of the knowns of the system.The wavefunction is defined by the variables $A,B,r,t,q,k$, the first can be defined in terms of $k$ and $q$. It is useful to then define $k$ and $q$ as

$$
E=\frac{\hbar^2k^2}{2m}=\frac{\hbar^2q^2}{2m}+V_0
$$

Thus defining the entire wavefuncion in terms of the two known variables $E$ and $V_0$.
If we switch focus onto the bounded state, when $E < V_0$. Classically for this potential it would be impossible for a particle to get to the other side of the barrier. However in the quantum case, anywhere the wavefunction is not zero then there is a probability that the particle could be there. Since the otherside of the barrier has a nonzero wavefunction then the particle could entier this classically unreachable position. To transition from the unbounded to the bounded state we can use the substititions $q \to i\kappa$, since in this region the alternative solution to the free particle must be used. If we make note that $\sin(ikx)=\sinh(kx)$ then the expressions become

$$
T=\frac{1}{1+\frac{V_0^2}{E(E-V_0)}\sinh^2(\kappa L)}
$$

$$
R=\frac{\frac{V_0^2}{E(E-V_0)}\sinh^2(\kappa L)}{1+\frac{V_0^2}{E(E-V_0)}\sinh^2(\kappa L)}
$$

As you can see the probaility of transmission is not $0$ as we would expect for the classical version of this system but instead quantum particles have the ability to "tunnel" through the barrier. Fortunately because the wavefunction cannot be normalised and we do not expect quantised energy we effectively know everything about the wavefunction it is possible to know. When plotting the wavefunction this substitution happens naturally as the inside of $(2.5)$ becomes negative and becomes imaginary. By varying $E$ and $V_0$ the bahaviour can be fully observed.
