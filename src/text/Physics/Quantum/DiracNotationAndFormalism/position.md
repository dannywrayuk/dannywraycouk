## Position
30th September 2018
Deriving the expressions for the position operator and exploring its properties.

Now the requirements for an operator that represents an observable have been understood, we can begin to derive useful operators such as position and momentum. I would like to point out that since kets are an abstract representation of the state of a system, that operators are also completely abstract. Just like kets, however, we can restirct ourselves to say position space and then begin to write down an expression for these operators based upon that. In most of quantuim mechanics it is assumed that calculations are done in position space, which is why we will derive these operators in position space as they will be most useful.
We will start with the position operator $\widehat{X}$. This operator should satisfy that
$$
\widehat{X}|\psi\rangle=x_0|\psi\rangle \tag{3.2.1}
$$
we start by multiplying both sides by $\langle\psi|$
$$
\langle\psi|\widehat{X}|\psi\rangle=x_0\langle\psi|\psi\rangle
$$
noticing that the LHS is the matrix element of $\widehat{X}$ and the RHS is just $(3.1.4)$ multiplied by a constant
$$
\int_{-\infty}^{\infty}\psi^*(x)\widehat{X}\psi(x)dx=x_0 \tag{3.2.2}
$$
If we recall from statistics that the mean of a probability distribution is 
$$
\mu = \int_{-\infty}^{\infty} xp(x)dx
$$
If we then let the Operator, in position space, be equal to
$$
\widehat{X}=x \tag{3.2.3}
$$
and sub back into $(3.2.1)$ to confirm that
$$
x_0=\int_{-\infty}^{\infty}x\psi^*(x)\psi(x)dx
$$
Where from $(1.5.7)$ we know $\psi\psi^*$ is the probability distribution, thus integral produces the mean value of position. To confirm that our choice is a valid operator for an observable, we must check that it is Linear and Hermitian. To check it's linear we must check it satisfies $(3.1.6)$
$$
\begin{aligned}
\widehat{X}(a\psi_1+b\psi_2)&=x(a\psi_1+b\psi_2)\\
&=ax\psi_1+bx\psi_2\\
&=a\widehat{X}\psi_1+b\widehat{X}\psi_2
\end{aligned}
$$
Which, as we would expect, it clearly does. To check the operator is Hermitian we must check it satisfies $(3.1.8)$
$$
\begin{aligned}
\langle\phi|\widehat{X}|\psi\rangle&=(\langle\psi|\widehat{X}|\phi\rangle)^*\\
&=\left( \int_{-\infty}^{\infty}\psi^*(x)\widehat{X}\phi(x)dx \right)^*\\
&=\int_{-\infty}^{\infty}(\widehat{X}\phi(x))^*\psi(x)dx\\
&=\int_{-\infty}^{\infty}\phi(x)^*\widehat{X}\psi(x)dx\\
&=\langle\phi|\widehat{X}|\psi\rangle
\end{aligned}
$$
Which it is. Meaning that the operator $(3.2.3)$ has eigenvalues that correspond to a physically observable quantity defined as the mean value of position. Notice, though we can now 'measure' the position of a paticle using this operator, that the system is still inherantly probablistic. $x_0$ is not the absolute position of the particle but the mean position that we would expect to find it. The particle could, prior to measurement, be anywhere that the wavefunction allows. The second postulate alludes to the idea of eigenstates. Eigenstates are the solutions to the equation $(3.2.1)$ that have definite eigenvalues, or, that there is no uncertainty in the mean $x_0$. THe usial proof is to equate the two integrals and show that the properties geometrically obey a dirac delta function, what follows is my own proof of the position operator eigenstates. The first requirement of the position eigenstates is that they, of course, satisfy the equation
$$
\widehat{X}|u\rangle=x_0|u\rangle\tag{3.2.4}
$$
Now we consider the statistics of uncertainty, defined as
$$
\Delta_x=\sqrt{\langle x^2 \rangle - x_0^2}
$$
for an uncertainty of zero this equates to
$$
\langle x^2 \rangle = x_0^2
$$
using the expectation of a continuous function is
$$
\int_{-\infty}^{\infty} x^2p(x) dx = x_0^2
$$
    and recalling $(1.5.7)$ to write
$$
\int_{-\infty}^{\infty} u(x)^*x^2u(x) dx = x_0^2
$$
it's at this stage we can convert the equation into dirac notation
$$
\langle u|\widehat{X}^2|u\rangle=x_0^2\langle u| u\rangle
$$
and into the form of the original equation 
$$
\widehat{X}^2|u\rangle=x_0^2| u\rangle \tag{3.2.5}
$$
Along with $(3.2.4)$ this is the only statistical requirement of the eigenstate. A function that satisfies these two equations must be an eigenstate. However, there is something more here. Suppose we were to apply the position operator on the eigenstate multiple times 
$$
\begin{aligned}
\widehat{X}|u\rangle&=x_0|u\rangle\\
\widehat{X}\widehat{X}|u\rangle&=x_0\widehat{X}|u\rangle\\
\widehat{X}^2|u\rangle&=x_0^2|u\rangle\\
\widehat{X}\widehat{X}^2|u\rangle&=x_0^2\widehat{X}|u\rangle\\
\widehat{X}^3|u\rangle&=x_0^3|u\rangle
\end{aligned}\tag{3.2.6}
$$
in general what we find is that the eigenstates must satisfy
$$
\widehat{X}^n|u\rangle=x_0^n|u\rangle\\ \tag{3.2.7}
$$
if we, again, convert this into integral form by multiplying by $\langle u |$
$$
\int_{-\infty}^{\infty} x^n|u(x)|^2 dx = x_0^n
$$
Thus we introduce the Dirac delta function $\delta(x)$. This strange function is zero everywhere, except at $x=0$ where it goes to $+\infty$, yet it has an area equal to one. The formal definition of the dirac delta function is 
$$
\int_{-\infty}^{\infty} f(x)\delta(x-x_0) dx = f(x_0)
$$
Where if we let $f(x)= x^n$ 
$$
\int_{-\infty}^{\infty} x^n\delta(x-x_0) dx = x_0^n
$$
We can see that this is exactly the behaviour required in $(3.2.7)$. And we can finally write that the position eigenstates are 
$$
u(x)=\delta(x-x_0)
$$
The position eigenstates are incredibly important and are usually given the symbol $|x\rangle$. The symbol $|u\rangle$ used here is left for many lesser important eigenstates or an eigenstate that is being solved for.


The position eigenstates have some very important properties that are utilised throught the entire of quantum mechanices, sometimes without even realising. The most important being the so called 'risky assumption' described in $(3.1.1)$. To prove this assumption is correct we start with an arbitrary state $|\psi\rangle$ and multiply by the position eigenstate $\langle x |$
$$
\langle x | \psi \rangle = \int_{-\infty}^{\infty} \delta(x-x')\psi(x)dx
$$
Where by the properties of the dirac delta function we have the wavefunction as
$$
\langle x | \psi \rangle = \psi(x)\\
\langle \psi | x \rangle = \psi(x)^*\tag{3.2.8}
$$
You might notice a little confusion between $x$ and $x'$ here. This is because the variable $x'$ is only used in the integral as there are two variables, however when in the dirac notation there is only the need for one so we return to just using $x$. It does mean however that care must be taken when multiplying these together as it yields the wrong answer. Now we can use this to help us solve eigenvalue equations much quicker, take this equation for instance
$$
\widehat{O}|\psi\rangle=o|\psi\rangle
$$
To solve this equation the original way we would have to multiply it by $\langle\psi|$ and then solve the resulting integrals, which can be very difficult. Now, if instead we multiply the equation by the position operator then the properties used in simplify the equation too
$$
\langle x|\widehat{O}|\psi\rangle=o\langle x|\psi\rangle\\
\widehat{O}\psi(x)=o\psi(x)\tag{3.2.9}
$$
Which is effectively just an algebra problem. This has far reaching uses thought quantum theory as we will se when we investigate the momentum operator.
