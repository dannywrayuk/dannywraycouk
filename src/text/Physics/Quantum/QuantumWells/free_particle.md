## A Free Particle
<date>17th August 2018</date>
<label>A solution to the Schrodinger equation for a Free Particle</label>
<hr/>

The time independent Schrodinger equation has different solutions depending on the potential that the particle feels. As we find the first solution it would make sense if it was the simplest possible potential, or, $V=V_0$. When we put this potential into the Schrodinger equation it becomes
$$
E\psi=\frac{-\hbar^2}{2m}\nabla^2\psi + V_0\psi
$$
In one dimension
$$
(V_0-E)\psi=\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2}
$$ 
This form of second order differential equation has a general solution
$$
\psi = Ae^{\alpha x}\tag{2.2.1}
$$
This is proven over in the mathematics section. To find the coefficients $A$ and $\alpha$ that the Schrodinger equation produces we sub this general solution into it. By doing so we have
$$
(V_0-E)\left(Ae^{\alpha x}\right)=\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\left(Ae^{\alpha x}\right)
$$ 
Taking the second derivative
$$
(V_0-E)\left(Ae^{\alpha x}\right)=\frac{\hbar^2}{2m}\left(A\alpha^2e^{\alpha x}\right)
$$
From this we can see that $A$ can have any value and by dividing through by $\psi$
$$
(V_0-E)=\frac{\hbar^2\alpha^2}{2m}\tag{2.2.2}
$$
Solving for $\alpha$ we have if $(V_0-E) < 0$
$$
\alpha =\pm i \frac{\sqrt{2m(V_0-E)}}{\hbar}=\pm ik \tag{2.2.3}
$$
And for $(V_0-E) > 0$
$$
\alpha =\pm \frac{\sqrt{2m(V_0-E)}}{\hbar} =\pm k \tag{2.2.4}
$$
Knowing this means that we can now write out the general solution for a free particle's wavefunction


For $(V_0-E) < 0$
$$
 \psi=Ae^{-ikx}+Be^{ikx}\tag{2.2.5}
$$
And for $(V_0-E) > 0$
$$
 \psi=Ae^{-kx}+Be^{kx}\tag{2.2.6}
$$
For the case of the free particle we can rule out the $(2.2.6)$ as its derivative is discontinuous and does not meet the requirements of a wavefunction. However, for the $(2.2.5)$ case this corresponds to a plane wave with frequency $k$ and is a valid wavefunction. Knowing that $k$ is the spatial frequency we can sub back into $(2.2.2)$ and find the expression for the energy with $\alpha=ik$
$$
E-V_0=\frac{\hbar^2k^2}{2m}\tag{2.2.7}
$$
To finish, we can combine our wavefunction with $(2.1.3)$ to arrive at
$$
\psi=\left(Ae^{-ikx}+Be^{ikx}\right)\exp{\left(\frac{-i\hbar k^2}{2m}t\right)} \tag{2.2.8}
$$

[![]([data:figure221])](https://www.desmos.com/calculator/eee88rqsyc)
<label>A plot of the wavefunction.</label>
