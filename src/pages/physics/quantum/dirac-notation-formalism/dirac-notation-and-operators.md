---
title: Dirac Notation and Operators
date: 2018/09/26
abstract: An Introduction to Dirac Notation.
layout: post
---

So far, most of the quantum mechanics we have done has felt very scattered and a little bit disorganised. Dirac
Notation is a attempt to create a system by which all quantum mechanical problems can be tackled within a formal
framework. The formalism is built upon a set of postulates which cannot be proved, their validity is based upon the
fact that they produce a consistent framework and are able to make accurate predictions which agree with
experiment. This formalism can seem very abstract if the foundations are not fully understood, but by starting with
the postulates it becomes quite intuitive.

The First Postulate
The state of any particle can be defined by a continuous complex function $\psi(x)$, which can be normalised so that
the square of its modulus is the probability for the result of a position measurement.

We define a mathematical object called the 'ket'

$$
|\psi\rangle
$$

This represents the state of a particle without reference to any basis and is thus completely abstract, it's prefered over $\psi(x)$ because it does not make explicit reference to position space (or any other space). There is no way to write down a mathematical definition of this object. It can be thought of as an infinitly dimensional column vector. The ket also has a counterpart called the 'bra' which is the equivilent of an infinite row vector, or

$$
\langle\psi|=\left(|\psi\rangle\right)^* \tag{3.1.1}
$$

When a problem is only dealing in one type of space, such as position space, it is usually assumed that $|\psi\rangle = \psi(x)$ where $\psi$ is a function of the approprite space. However, this assumption is very risky and will be mathematically described later on.
Just like vectors the dot product can be taken of two ket. The definition of the dot product is

$$
a.b=a^*b=\sum_{i=0}^N a_ib_i
$$

The dot product of two kets $|\psi\rangle$ and $|\phi\rangle$ is then

$$
|\phi\rangle.|\psi\rangle=\left(|\phi\rangle\right)^*|\psi\rangle=\langle\phi|\psi\rangle
$$

Meaning the dot product, or 'overlap', is always some complex constant

$$
\langle\phi|\psi\rangle = c\tag{3.1.2}
$$

Since the kets are infinitely dimensional the sum becomes an integral and the overlap is defined in arbitrary coordinates $r$ as

$$
\langle\phi|\psi\rangle =\int_{-\infty}^{\infty}\phi^*(r)\psi(r)dr \tag{3.1.3}
$$

The overlap of $\phi$ with $\psi$ gives the probability amplitude for a particle in state $\psi$ to be found in
$\phi$. If two wavefunctions have an overlap of zero they are said to be orthogonal, this occurs when it is
impossible for a particle in state $\psi$ to be found in state $\phi$. If two wavefunctions are orthogonal and
normalised they are said to be orthonormal.
I would argue that $(3.1.3)$ is the most important part of Dirac notation, for example, $(1.5.8)$ can be expressed in a much simpler form using this notation

$$
\begin{aligned}
\langle\psi|\psi\rangle &=\int_{-\infty}^{\infty}\psi^*(r)\psi(r)dr\\
&=\int_{-\infty}^{\infty}|\psi(r)|^2dr\\
&=1 \tag{3.1.4}
\end{aligned}
$$

Using $(3.1.3)$ the properties of overlaps can be derived

$$
\langle\psi|a_1\phi_1 + a_2\phi_2\rangle = a_1\langle\psi|\phi_1\rangle + a_2\langle\psi|\phi_2\rangle
$$

$$
\langle a_1\psi_1 + a_2\psi_2|\phi\rangle = a^*_1\langle\psi_1|\phi\rangle + a^*_2\langle\psi_2|\phi\rangle
$$

In a large majority of cases $\langle\phi|\psi\rangle \neq \langle\psi|\phi\rangle$ and care must be taken when
reversing the order of the product.

The Second Postulate
Any observable can be represented by a linear hermitian operator whos eigenvalues are the possible values of the
observable and the eigenstates are the states in which the observable has a definite value. When the observable
is measured the wavefunction changes discontinously into the eigenfunction of the eigenvalue measured.

The next key component in this framework are Operators. An operator is a mathematical object that takes a function
and transforms it into another. An example of an operator would be the differential operator
$\widehat{D}=\frac{d}{dx}$. It would operate on a function like so

$$
\widehat{D}f(x)=f'(x)
$$

Operators don't usually make sense on their own and will almost always be seen operating on another object. Deeply
linked to the idea of operators in quantum mechanics are observables. An observable is something we wish to measure about the system
such as Energy or Position. The second postulate states that for any observable with possible values (Eigenvalues)
$o$ there is and operator $\widehat{O}$ that has these eigenvalues when the system is in a possible state (Eigenstate) $|u\rangle$. These
types of equations have the form

$$
\widehat{O}|u\rangle=o|u\rangle\tag{3.1.5}
$$

If $\widehat{O}$ is defined in position space, the risky assumption discussed in $(3.1.1)$ is valid. Therefore

$$
\widehat{O}u(x)=ou(x)
$$

Observables are represented by linear hermitian operators, as the second postulate. Operators are linear
if they obey a distributive property, such that

$$
\widehat{O}(a\psi_1+b\psi_2)=a\widehat{O}\psi_1+b\widehat{O}\psi_2\tag{3.1.6}
$$

To show that an operator is hermitian requires a little more work. Firstly we extend $(3.1.3)$ to include operators. If $\widehat{O}$ acting on state $|\psi\rangle$ transforms it into some abritrary state, $|\widehat{O}\psi\rangle$, then

$$
\begin{aligned}
\langle\phi|\widehat{O}|\psi\rangle &= \langle\phi|\widehat{O}\psi\rangle\\
&=\int_{-\infty}^{\infty}\phi^*(r)\widehat{O}\psi(r)dr \tag{3.1.7}
\end{aligned}
$$

Secondly, we introduce the adjoint of an operator $\widehat{O}^\dagger$, which is almost the operator analogoue of the complex conjugate of a number. It's defined as the operator that satisfies

$$
\int_{-\infty}^{\infty}\phi^*(r)\widehat{O}\psi(r)dr=\int_{-\infty}^{\infty}(\widehat{O}^\dagger\phi(r))^*\psi(r)dr
$$

More simply using the matrix element definition

$$
\langle\phi|\widehat{O}|\psi\rangle=(\langle\psi|\widehat{O}^\dagger|\phi\rangle)^*\tag{3.1.8}
$$

For an operator to be hermitian it must be equal to it's own adjoint. If $\widehat{O}$ is hermitian then it must
satisfy

$$
\widehat{O}=\widehat{O}^\dagger\\ \tag{3.1.9}
$$

Therefore observables can only be represented by operators that satisfy $(3.1.6)$ and $(3.1.9)$. To see why it is
important for observables to be represented by linear hermitian operators let us consider the eigen values of these
operators. If $u_n$ and $u_m$ are eigenfunctions of the hermitian operator $\widehat{O}$ then by combining $(3.1.8)$ and $(3.1.9)$

$$
\langle u_n|\widehat{O}|u_m\rangle=(\langle u_m|\widehat{O}|u_n\rangle)^*
$$

Using $(3.1.5)$ we can sub in the eigenvalues

$$
\langle u_n|o_m|u_m\rangle=(\langle u_m|o_n|u_n\rangle)^*
$$

and since they are constant write

$$
o_m\langle u_n|u_m\rangle=o_n^*(\langle u_m|u_n\rangle)^*
$$

Assuming that $n=m$ and recalling $(3.1.4)$ then we can deduce that

$$
o_n=o_n^*\tag{3.1.10}
$$

Proving that hermitian operators can only have real eigenvalues, which is essential if they are to represent
measureable quantities. Assuming that $n\neq m$ gives

$$
\begin{aligned}
(o_m-o_n)\langle u_n|u_m\rangle&=0\\
\langle u_n|u_m\rangle&=0
\end{aligned}\tag{3.1.11}
$$

Proving that hermitian operators can only have orthogonal eigenfunctions, which is also essential as if a particle
is in state $u_n$ then there should be zero probability of finding it in state $u_m$. This realtionship can be summed up using $(3.1.4)$ and $(3.1.11)$ as

$$
\langle u_i|u_j\rangle = \delta_{ij}
$$

where $\delta_{ij}$ is the Kronecker delta, which is zero when $i\neq j$ and one when $i=j$.
