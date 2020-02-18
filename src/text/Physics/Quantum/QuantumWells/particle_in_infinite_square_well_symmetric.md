## Particle in a Symmetric Infinite Square Well
<date>20th August 2018</date>
<label>Solving the Schrodinger Equation for a Symmetric Infinite Square Well Potential</label>
<hr/>


This solution of the Schrödinger equation isn’t necessary since the Infinite potential well has been solved in $(2.3)$, however a symmetric potential leads to a slightly different form of the solution and can be useful when solving other problems later. the symmetric potential we will be using is
 $$
 V(x)=
 \begin{aligned}
	\begin{cases}
		&0 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&\infty 	\quad	&\text{otherwise}
	\end{cases}
	\end{aligned} \tag{2.4.1}
$$
Again, we start with the free particle solution inside the box and require that the wave function is zero in places that are unphysical
$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&Ae^{-ikx}+Be^{ikx} 		\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&0						\quad	&\text{otherwise}
	\end{cases}
	\end{aligned}
$$
Only this time we are going to notice that the wavefunction inside the box can be written as a product of a sine and a cosine
$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&A\sin(kx)+B\cos(kx) 	\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&0						\quad	&\text{otherwise}
	\end{cases}
	\end{aligned} \tag{2.4.2}
$$
Following the same procedure as last time we can use that the wavefunction is zero in the corners to find some boundary conditions
$$
\psi(-\frac{L}{2})=\psi(\frac{L}{2})=0
$$
This results in two equations
$$
A\sin \left( \frac{kL}{2} \right) + B\cos \left( \frac{kL}{2} \right)=0\\ 
A\sin \left( -\frac{kL}{2} \right) + B\cos \left( -\frac{kL}{2} \right)=0 \tag{2.4.3}
$$
By either adding these equations together and solving or subtracting and solving the solution found for $k$ is the exact same as in the asymmetric case
$$
k=\frac{\pi n}{L} , n \in \mathbb{N} \tag{2.4.4}
$$
Which means that the energy is the same as in the asymmetric case $(2.3.6)$. This is what we would expect as the energy should not change just because the potential has shifted over. The wavefunction should have changed, though. If we now take either of $(2.4.3)$ and sub in for $k$ using $(2.4.4)$ then we find
$$
A\sin \left( \frac{n \pi}{2} \right) + B\cos \left( \frac{n \pi}{2} \right)=0 \tag{2.4.5}
$$
For even values of $n$ we see the solution is that $B=0$ and for odd values the solution is $A=0$. This means the solution inside the box must be defined piecewise like the potential and depends on the value of $n$ as 
$$
\psi(x)_{inside}=
\begin{aligned}
	\begin{cases}
		&A\sin \left( \frac{x n \pi}{L} \right)		\quad 	&\text{for even} \ n\\
		&B\cos \left( \frac{x n \pi}{L} \right)		\quad	&\text{for odd}  \ n
	\end{cases}
	\end{aligned} \tag{2.4.6}
$$
Using the exact same method as the in $(2.3.4)$ we can find the values of $A$ and $B$. They unsurprisingly turn out to be the same as $(2.3.4)$ and we can write down the final solution
$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&u(x)	\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&0		\quad	&\text{otherwise}
	\end{cases}
	\end{aligned}
$$
$$
u(x)=
\begin{aligned}
	\begin{cases}
		&\sqrt{\frac{2}{L}}\sin \left( \frac{x n \pi}{L} \right)		\quad 	&\text{for even} \ n\\
		&\sqrt{\frac{2}{L}}\cos \left( \frac{x n \pi}{L} \right)		\quad	&\text{for odd}  \ n
	\end{cases}
	\end{aligned} \tag{2.4.7}
$$
and corresponding energy levels
$$
E_n=\frac{\hbar^2(\frac{\pi n}{L})^2}{2m}=n^2\frac{h^2}{8mL}=n^2E_1 \tag{2.3.6}
$$

[![]([data:instagram_image1])](https://www.desmos.com/calculator/tjjyki30e7)

<label>A plot of the wavefunction.</label>


<hr/>

Equation $(2.4.7)$ is usually taken as the solution but it is possible to write the wavefunction without the need to define the function $u(x)$. This is done by exploiting that the sine and cosine in $(2.4.5)$ alternate between $0$ and $\pm 1$ for integer values of $n$. Squaring these functions causes them to oscillate between $0$ and $1$ and they can be used as a coefficient in the wavefunction to select the correct term for a given value of $n$. This form is almost never used as it is far too messy, but looks like this
$$
\psi(x)=
\begin{aligned}
	\begin{cases}
		&\sqrt{\frac{2}{L}}\sin \left( \frac{x n \pi}{L} \right)\cos^2 \left( \frac{n \pi}{2} \right)+\sqrt{\frac{2}{L}}\cos \left( \frac{x n \pi}{L} \right)\sin^2 \left( \frac{n \pi}{2} \right)	\quad 	&-\frac{L}{2}\lt x \lt \frac{L}{2}\\
		&0						\quad	&\text{otherwise}
	\end{cases} 
	\end{aligned}\\(2.4.8)
$$
 
