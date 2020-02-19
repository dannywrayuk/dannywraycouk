## Particle in a Finite Square Well
<date>1st September 2018</date>
<label>Solving the Schrodinger Equation for a Finite Square Well Potential</label>
<hr/>


The next potential that would be appropriate to solve would be the case in which the walls of the box are not infinite. Having a finite potential means it is no longer unphysical for the particle to be in these regions and the condition of the wavefunction being zero can no longer simply be required. Instead in these regions the Schrödinger equation takes on the solution for the free particle, only in these cases we cannot disregard the $(2.2.6)$ solution in which $V_0>E$. When $V_0>E$ these states are called 'bound' states as the particle becomes contained within the well. These will be the focus of this solution. 'Unbound' states are when the particle has enough energy that the potential well cannot contain the particle and looks like a slightly perturbed free particle and so will not be the focus. The potential has the form
$$
 V(x)=
 \begin{aligned}
	\begin{cases}
		&0 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&V_0 	\quad	&\text{otherwise}
	\end{cases}
	\end{aligned} \tag{2.5.1}
$$
And we can construct a generic wavefunction as

<div class="[style:largeEquation]">

$$
\small{
 \psi(x)=
 \begin{aligned}
	\begin{cases}
		&Ce^{-\kappa x}+De^{\kappa x} 		\quad	&x<-\frac{L}{2}\\
		&Ae^{-ikx}+Be^{ikx} 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&Ce^{-\kappa x}+De^{\kappa x}  		\quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned} \tag{2.5.2}
}
$$
</div>

For the wavefunction to be normalisable we require that as $x \to \pm\infty$ then $\psi \to 0$ using this we can see the exponential terms in the outer pieces can be removed

<div class="[style:largeEquation]">

$$
 \psi(x)=
 \begin{aligned}
	\begin{cases}
		&De^{\kappa x} 		\quad	&x<-\frac{L}{2}\\
		&Ae^{-ikx}+Be^{ikx} 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&Ce^{-\kappa x} 		\quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned} \tag{2.5.3}
$$
</div>

Again, as in the infinite potential well we can split the wavefunction up into odd and even values of $k(n)$. If we begin work on the even case, we have
$$
 \psi(x)_{even}=
 \begin{aligned}
	\begin{cases}
		&De^{\kappa x} 		\quad	&x<-\frac{L}{2}\\
		&A\sin(kx)		 \quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&Ce^{-\kappa x} 		\quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned} \tag{2.5.4}
$$
If we use the physical requirements of a wavefunction $(1.5.8)$ then at $x=\pm\frac{L}{2}$ there are two parts of the wavefunction that must be satisfied along with its derivative. Luckily, this is an occasion where we can exploit the symmetric potential and we only need solve this for one side of the equation and the other side can be implied. This then gives us an equation and its derivative that must be satisfied
$$
D\exp{\left(-\frac{L\kappa}{2}\right)}=A\sin{\left(-\frac{Lk}{2}\right)}	\tag{2.5.5}
$$
$$
D\kappa \exp{\left(-\frac{L\kappa}{2}\right)}=Ak\cos{\left(-\frac{Lk}{2}\right)}	\tag{2.5.6}
$$
Dividing $(2.5.6)$ by $(2.5.5)$ 
$$
\kappa=k\frac{\cos{\left(-\frac{Lk}{2}\right)}}{\sin{\left(-\frac{Lk}{2}\right)}}=-k\cot{\left(\frac{kL}{2} \right)} \tag{2.5.7}
$$
We now have an expression for $\kappa$ and given any value of $k$ we can now find the curve that form a smooth connection between the two regions. We can now use $(2.2.5)$ to find an expression for $D$ and eliminate that from the wavefunction.
$$
D=-A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)} \tag{2.5.8}
$$
Thanks to the symmetry of the potential and wavefunction we can also see that $C=-D$ and combine with $(2.5.8)$ to write the wavefunction as

<div class="[style:largeEquation]">

$$
 \psi(x)_{even}=
 \begin{aligned}
	\begin{cases}
		&-A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)}e^{\kappa x} 		\quad	&x<-\frac{L}{2}\\
		&A\sin(kx)		\quad	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)}e^{-\kappa x} 		\quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned}\tag{2.5.9}
$$
</div>

We can solve for $A$ using the normalisation conditions $(1.5.8)$
$$
\int_{-\infty}^{\infty}|\psi|^2 dx =1 
$$
Therefore

<div class="[style:largeEquation]">

$$
\int_{-\infty}^{-\frac{L}{2}} \left(-A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)}e^{\kappa x}\right)^2 dx+
\int_{-\frac{L}{2}}^{\frac{L}{2}} \left(A\sin(kx)\right)^2dx+
\int_{\frac{L}{2}}^{\infty} \left(A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)}e^{-\kappa x}\right)^2 dx =1
$$
</div>

We can again simplify this using the symmetry of the potential

<div class="[style:largeEquation]">

$$
\int_{-\frac{L}{2}}^{\frac{L}{2}} \left(A\sin(kx)\right)^2dx+
2\int_{\frac{L}{2}}^{\infty} \left(A\sin{\left(\frac{Lk}{2}\right)}\exp{\left(\frac{L\kappa}{2}\right)}e^{-\kappa x}\right)^2 dx =1
$$

</div>

Taking all constant terms outside of the integral

<div class="[style:largeEquation]">

$$
A^2\int_{-\frac{L}{2}}^{\frac{L}{2}} \sin^2(kx)dx+
2A^2\sin^2{\left(\frac{Lk}{2}\right)}\exp{(L\kappa)}\int_{\frac{L}{2}}^{\infty} e^{-2\kappa x} dx =1
$$
</div>

These integrals are now easy to evaluate, and we have

<div class="[style:largeEquation]">

$$
A^2+\frac{1}{2}\left(L - \frac{\sin(k L)}{k}\right)+
2A^2\sin^2{\left(\frac{Lk}{2}\right)}\exp{(L\kappa)}\frac{e^{-L\kappa}}{2\kappa}=1
$$
</div>

Which has the messy solution

<div class="[style:largeEquation]">

$$
A = \sqrt{\frac{2k\kappa}{ \kappa(L-\sin(Lk))+k(1-\cos(Lk))}} \tag{2.5.10}
$$
</div>

We now know the entire even solution based upon $(2.5.7)$, $(2.5.9)$ and $(2.5.10)$. To find the odd solution the entire process must be done again. Doing so, we find an equivalent equation to $(2.5.7)$ 
$$
\kappa=k\tan{\left(\frac{kL}{2} \right)}\tag{2.5.11}
$$
Symmetry based wavefunction like $(2.5.9)$
$$
\psi(x)_{odd}=
\begin{aligned}
	\begin{cases}
		&De^{\kappa x} 		\quad	&x<-\frac{L}{2}\\
		&B\cos(kx)		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&Ce^{-\kappa x} 		\quad	&x>\frac{L}{2}\\
	\end{cases}
	\end{aligned} \tag{2.5.12}
$$
And finally, the normalisation constant 

<div class="[style:largeEquation]">

$$
B= \sqrt{\frac{2k\kappa}{ \kappa\sin(Lk)+k(\cos(Lk))+L\kappa+1)}} \tag{2.5.13}
$$
</div>

At this point you might think that we are done, that the wavefunction has been found. But, there is one final step. The quantisation of $k$. We have an equation that relates $\kappa$ and $k$ but there is no equivalent to $(2.3.3)$. We can, however, use that the total energy of the particle should be the same in whichever region it is in
$$
E=\frac{\hbar^2k^2}{2m}=-\frac{\hbar^2\kappa^2}{2m}+V_0
$$
which simply implies that
$$
k^2+\kappa^2=\frac{2mV_0}{\hbar^2} \tag{2.5.14}
$$
By defining the variables 
$$
\Lambda = \sqrt{\frac{V_0}{\varepsilon}}
$$
$$
u=\frac{Lk}{2\pi}
$$
$$
v=\frac{L\kappa}{2\pi}
$$
$(2.5.7)$, $(2.5.11)$ and $(2.5.14)$ then become
$$
v=-u\cot{(\frac{\pi u}{2})}
$$
$$
v=u\tan{(\frac{\pi u}{2})}
$$
$$
u^2+v^2=\Lambda^2
$$
Plotting these functions, there are indeed solutions.

[![]([data:instagram_image1])](https://www.desmos.com/calculator/hhskmovpjt)
<label>The intersections of this graph correspond the the physical solutions for the vaules of $k$ and $\kappa$</label>


The problem is that these equations are transcendental and have no analytical solutions. To solve for the value of $k$ numerical methods must be used. First though we can notice a few features of the graph


The States alternate between odd and even.
There is always at least one odd bound state
The total number of bound states is the integer smaller than $\Lambda$
There is only one solution between $n< v < (n+1)$ 


Because of the final point, to find the allowed values of $k$ a numerical method can be used with an initial value of $v=n+1/2$ and the wavefunction can be found. We also find that as $V_0 \to \infty$ that the wavefunction becomes that of the infinite potential well $(2.4)$ as would be expected.

[![]([data:instagram_image1])](https://www.desmos.com/calculator/obikem00ni)
<label>A plot of the wavefunction.</label>

