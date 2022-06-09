---
title: Scalar Fields in Cosmology
abstract: My Masters Thesis.
date: 2020/05/29
image: /img/cover-images/scalar-fields.jpeg
timeline:
  variant: project
---

### Abstract

This report provides an in depth investigation into the dynamics of dark energy using scalar fields with exponential potentials. We begin with an overview of the Friedmann equations and an explanation of the cosmological constant problem, which provides motivation for alternative models of dark energy. This prompts a discussion of quintessence and the use of exponential potentials, for which an exact solution is examined. The dynamics of a scalar field in the presence of a single background fluid are reviewed, then extended to facilitate a second background fluid and the equations of motion are presented. The fixed points of the system are analysed and provided for a general set of fluids $\gamma_1$ and $\gamma_2$. We derive a condition for measuring the time at which the scalar field will cause accelerated expansion, then modify the potential to include a second exponential term, transitioning the system from a scaling regime into an accelerating regime. This allows us to simulate the evolution of the universe, however high levels of fine tuning are found to be required to do so. Constraints are placed on the slopes of the potential and the initial conditions, with which we predict the universe will begin to accelerate at redshift $z_a = 0.61 \pm 0.22$. Further constraints are placed on the free parameters in the potential by using observed values for cosmological parameters, which again confirm the level of fine tuning. Finally we discuss possible applications of the model such as the Hubble tension and investigating domain walls. Using a naive method we find that domains walls must have $\Omega_d < 0.18 \pm 0.02$ at early times for the universe to evolve as expected. The appendix contains a full list of fixed points and eigenvalues for general fluids in each case analysed.

## Introduction

In the field of cosmology, scalar fields play a vital role in explaining the dynamics of the early universe. Inflation is a term used to describe a period of incredibly rapid exponential expansion that increased the size of the universe by the order $10^{22}$ \cite{weinberg_2015}. The first model of inflation was published by Guth, \citeref{Guth_1981}, as a method of resolving the flatness problem. It used a scalar field slowly rolling down a shallow potential to provide the huge negative pressure required for the large expansion. This was hypothesised approximately 4 decades ago, and at this time it was unknown that the universe was undergoing an accelerated expansion at present, which was observed for the first time 2 decades ago. \citerefs{Riess_1998,Perlmutter_1999} both independently made observations of type Ia supernovae that suggested that the universe is accelerating. This is in stark contrast to the accepted theories at the time of Einstein, as it was believed that the universe was stationary and did not evolve. Surprisingly, though, an idea introduced by Einstein, albeit for a different purpose, can be used to explain the observed accelerated expansion. There is a significant problem with this method however. While it has been shown that the cosmological constant model is the best at describing the observable universe \cite{COPELAND_2006}, when compared to the predictions of quantum field theory there is a disagreement of huge proportions \cite{Weinberg_1989}. This problem, as well as other background for this work shall be discussed in the next chapter.

The energy associated with the accelerated expansion has been named 'Dark Energy', and problems in the current theory has motivated the investigation of alternative methods. Logically, since the scalar fields can provide a large expansion during the time of inflation, many theories of dark energy also use scalar fields to provided this acceleration. We shall focus on on a specific type, Quintessence, coupled with an exponential potential motivated by \citeref{Copeland_1998}.

In Chapter 4 we shall devise a model that extends upon the work of \citeref{Copeland_1998}, by increasing the number of fluids present and modifying the potential. A large amount of analysis was performed on the fixed points of these systems. This required calculation of eigenvalues used to determine the stability of the system when subject to a small perturbation. The tables for the fixed points are included within the text where appropriate, others are included in the appendices along with the eigenvalues.

Chapter 5 builds upon the devised scalar field model and uses observations from modern surveys, such as the Planck 2018 results \cite{planck_2018}, to place constraints on the free parameters in the model. Finally, we will discuss some applications of the scalar field model and why it is useful as more than just a dark energy candidate.

While reading this report you should be aware that for convenience natural units will be used unless explicitly stated otherwise. This specifies that $c=h=G=1$, that is, the speed of light $c$, Planck's constant $h$ and Newtons gravitational constant are all set to unity. Unless stated otherwise we shall also use $k^2=8\pi G$, with $G$ being the aforementioned Gravitational constant and thus equal to one. Numerical simulations were used to a large degree throughout this research, however due to the nature of the simulations it is very difficult to calculate meaningful errors on results. Where possible they are calculated and included, however, many values are simply rounded outputs. In most simulations, time was measured as the number of e-foldings, $N=log{(a)}$, and so should be assumed unless stated otherwise.

% \clearpage
\section{Properties of the Universe}

\subsection{FLRW cosmology and the cosmological constant}

The Einstein field equations describe much of cosmology to a great level of accuracy. This is especially true in the presence of symmetries, for some of which the equations yield analytical solutions. The cosmological principle states that on large scales (order $100\si{Mpc}$) the universe is isotropic and homogeneous \cite{weinberg_2015}. These are the symmetries leveraged by the Friedmann-Lemaître-Robertson-Walker (FLRW) metric. It is commonly written,
\begin{equation}
\label{friedmann-metric}
   ds^2 = -dt^2 + a^2(t)\left[ \frac{dr^2}{1-kr^2} + r^2(d\theta^2 + \sin^2\theta d\phi^2) \right],
\end{equation}
where $k$ corresponds to the Gaussian curvature of the universe and $a(t)$ is the scale factor by which space expands. The constant $k$ in this equation determines the spacial geometry of the universe. $k=-1$ implies an open hyperbolic universe, $k=0$ a flat infinite universe and $k=1$ a closed spherical universe.
We should note how only the scale factor $a$ has a time dependence, that is to say, all the dynamics of the universe are contained within the evolution of the scale factor and the overall geometry of the universe will remain constant in time. Due to this, the universe can only expand or contract at a rate given by the evolution of $a$, and we can solve for this evolution using the Einstein equations for a given energy-momentum tensor. 

An appropriate form for the energy density of a homogeneous, isotropic universe would be a perfect barotropic fluid. These fluids are defined such that the energy-momentum tensor is,
\begin{equation}
\label{friedmann-emtensor}
    T_\nu^\mu = \diag(-\rho,p,p,p),
\end{equation}
where $\rho$ is the density and $p$ is pressure, and the density is a function of pressure only \cite{Franklin_2010}. We can consider a universe containing $i$ of said fluids by allowing $\rho$ and $p$ to represent the sum of the density and pressure contributions from each fluid respectively. With this energy-momentum tensor and the FLRW metric, the Einstein equations can be simplified to three evolution equations governing the dynamics of the universe,
\begin{equation}
\label{friedmann-eqn}
    H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{\kappa^2}{3}\rho - \frac{k}{a^2},
\end{equation}
\begin{equation}
\label{friedmann-acceleration}
    \dot{H}+H^2 = \frac{\ddot{a}}{a} = -\frac{\kappa^2}{6} \left( \rho + 3p \right). 
\end{equation}
The first equation being the Friedmann equation and the second commonly referred to as the acceleration equation, since it contains a second derivative of the scale factor $a$.
Here, dots represent a time derivative, $H$ is the Hubble parameter and both $a$ and  $k$ are the same as defined in \citeeqn{friedmann-metric}, with $\kappa^2=8\pi G$, $G$ being Newtons gravitational constant.

Finally, derived from the conservation of the energy-momentum tensor, the continuity equation,
\begin{equation}
\label{friedmann-fluid}
    \dot{\rho} = -3H\left(\rho + p\right),
\end{equation}
where again, $H$ is the Hubble parameter and $\rho$ and $p$ are the total density and pressure of fluids.
The derivation for all three of these equations are well documented in \citerefs{weinberg_2015,Franklin_2010,DODELSON_2003,modcosmo_2019}. 

When these equations were first derived it was consensus among cosmologists that the universe was static, thus it was natural to assume that $\dot{a}=\ddot{a}=0$. This would simplify \citeeqn{friedmann-eqn} and \citeeqn{friedmann-acceleration} to, 
\begin{equation}
    \rho = -3p = \frac{3k}{\kappa^2 a^2}.
\end{equation}
We can see here that since density must always be positive, we would require a negative pressure to satisfy the static universe model, and hence Einstein ruled it a non-physical result. To remedy this, Einstein introduced a constant term in his equations, namely $\Lambda$ the cosmological constant. The introduction of this constant in the Einstein equations is inherited by \citeeqn{friedmann-eqn} and \citeeqn{friedmann-acceleration}, requiring modification such that,
\begin{equation}
\label{friedmann-eqn-L}
    H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{\kappa^2}{3}\rho - \frac{k}{a^2} + \frac{\Lambda}{3}, 
\end{equation}
\begin{equation}
\label{friedmann-acceleration-L}
    \dot{H}+H^2 = \frac{\ddot{a}}{a} = -\frac{\kappa^2}{6} \left( \rho + 3p \right)  + \frac{\Lambda}{3},
\end{equation}
If we now perform the same calculation as before by setting $\dot{a} = \ddot{a} = 0$ then the resulting requirements are,
\begin{align}
    \rho &= \frac{2\Lambda}{\kappa^2},& \Lambda &= \frac{k}{a^2}. \label{static-requirement}
\end{align}
The non-physical result is therefore avoided in this case given that $\Lambda > 0$, since density must be positive, thus implying that $k=1$ and that the universe must be closed. This description was successful in describing a static universe, however, the static universe model was later ruled out by Hubble with his observations showing distant stars were redshifted \cite{Hubble_1929}. These results not only showed that the universe was expanding, thus $\dot{a}>0$, but the cosmological constant was shown to have a value of roughly,
\begin{equation}
    \Lambda \approx H_0^2,
\end{equation}
where the naught subscript denotes the present value of the Hubble parameter. Thus from \citeeqn{static-requirement} we can calculate the energy density of the vacuum giving,
\begin{equation}
    \rho_v = \frac{2H_0^2}{\kappa^2} \simeq 10^{-47} \si{GeV^4}.
\end{equation}
The requirement of a cosmological constant causes few problems in cosmology alone, but with the introduction of quantum field theory (QFT) in the 1940s it caused a disagreement of many orders of magnitude.

QFT is a unifying theory that combines quantum mechanics and special relativity. It uses fields to describe all of particle physics, particles being the manifestation of an excitation in their respective field. QFT predicts vacuum fluctuations that permeate all of space, and this vacuum energy would contribute toward the cosmological constant \cite{COPELAND_2006}. By summing over the modes $k$ of a field of mass $m$ up to some cut-off frequency $k_{max}$, the vacuum energy density of the field is,
\begin{equation}
    \rho_v = \frac{1}{4 \pi^2}\int_0^{k_{max}}dk k^2\sqrt{k^2+m^2}  \simeq \frac{k_{max}^4}{16\pi^2}.
\end{equation}
The cut-off frequency here is chosen as the maximum frequency that the formula is expected to be valid. It is often chosen to be the frequency which corresponds to a wavelength equal to the plank length, or $k_{max} = m_{pl}$, as this is regarded as the point at which physics begins to break down \cite{Weinberg_1989}. Even before we begin to calculate the value of the energy density, we can see that it is clearly going to be much greater than that found through observation. The value of the vacuum energy from QFT turns out to be of the order $\rho_v = 10^{74}\si{GeV^4}$ and therefore disagrees with the observed value from cosmology by $10^{121}$. These orders of magnitude are almost unheard of in physics and the disagreement has been dubbed the 'cosmological constant problem'.

Cosmology has had a turbulent relationship with the cosmological constant ever since it was first introduced by Einstein, being both abandoned and then later reintroduced several times. The history of this relationship is described in great detail by Weinberg in \citeref{Weinberg_1989}. However, less than a decade after Weinberg's review was published, observations of distant supernovae would completely change the perception of the cosmological constant and make it once again relevant. 


\subsection{Evidence for Dark Energy}
In 1998 two independent research groups made observations of type Ia supernovae showing that the universe is not only expanding, it is doing so at an accelerating rate \cite{Riess_1998,Perlmutter_1999}.

Type Ia supernovae occur when a white dwarf star accretes enough mass go beyond its Chandrasekhar limit and collapses. The Chandrasekhar limit is constant for all white dwarfs and thus the absolute magnitude of all type Ia supernovae is believed to be the same. The uniform absolute magnitudes makes them excellent standard candles and allow for precise calculation of their distance from earth, known as luminosity distance \cite{modcosmo_2019}. Redshift is important in these observations because it is proportional to the scale factor $a$, 
\begin{equation}
    1+z = \frac{\lambda_0}{\lambda} = \frac{a_0}{a},
\end{equation}
where the redshift z is calculated using the ratio of an expected wavelength $\lambda_0$ to the observed wavelength $\lambda$ and $a_0$ is the present scale factor.
Rearranging \citeeqn{friedmann-eqn} into the form,
\begin{equation}
     \frac{\kappa^2\rho}{3H^2} - 1 = \frac{k}{a^2H^2}, \label{param-def}
\end{equation}
allows us to define $\Omega$, the density parameter,
\begin{equation}
    \Omega = \frac{\rho}{\rho_c} =\frac{\kappa^2\rho}{3H^2}. \label{critical-dens-def}
\end{equation}
Here, we have defined the critical density $\rho_c = \sfrac{3H^2}{\kappa^2}$ and since $\rho$ is the sum of density contributions from each fluid, likewise $\Omega$ is the sum of the density parameter contributions. We can see from these equations since $\Omega$ is related to $k$, that the geometry of the universe is determined by the total density of the fluids within it. Adjusting the density parameter of each fluid in the universe then allows us to predict the distance of the supernova given its redshift. Comparing the luminosity distance to the predicted distances, both research groups found that supernovae were approximately $12.5\%$ further than would be predicted by a universe with no cosmological constant. Some of the supernovae measurements from \citeref{Riess_1998} can be seen in \citefig{supernovae}. This data lead both research groups to the conclusion that in order to account for the extra distance observed, the cosmological constant must be causing the expansion of the universe to accelerate.

\begin{figure}[ht]
    \includegraphics[width=\linewidth]{2_Chapters/2_Properties/Images/supernovae.png}
    \caption{Data points represent observed values of redshift $z$ as a function of a distance $m-M$ for type Ia supernovae. Lines represent theoretical cosmologies with different density parameters for both dark energy $\Omega_\Lambda$ and matter $\Omega_m$. The lower panel shows the difference from the $\Omega_m = 0.20$, $\Omega_\Lambda=0.00$ model. From \citeref{Riess_1998}.}
    \label{supernovae}
\end{figure}

Since this discovery the energy associated with the cosmological constant has been named 'Dark Energy', after  its  ability  to  evade  detection  whilst  also  making reference (though unrelated) to dark matter - another seemingly undetectable cosmic medium. Though dark energy has not been detected directly, its influence on the universe can be observed indirectly as we have just seen with the redshift in supernovae. Other methods such as analysis of galaxy clusters, cosmic microwave background (CMB) anisotropies, baryon acoustic oscillations (BAO) and the 'age problem' all lead to the same conclusion - there exists some form of dark energy driving acceleration of the universe. 

These observations of an accelerating universe remove all doubt that the static universe model is incorrect. The acceleration of the universe appears directly in our evolution equations, namely $\ddot{a}$ in \citeeqn{friedmann-acceleration-L}. For acceleration we require that $\ddot{a} > 0$ and thus we can see that this is only provided by a cosmological constant in this equation, or a fluid with negative pressure. For this reason the cosmological constant is no longer seen as a mechanism to stop the universe from collapse, but rather a necessity to provide a pressure driving the acceleration. With a further need of a cosmological constant, its disagreement with QFT can no longer be ignored. Many attempts to solve the cosmological constant problem have been made. Some of the more notable theories, such as supersymmetery, offer a modification to QFT and others, such as Sequestering \cite{Kaloper_2014},  offer a modification to gravity. Some, such as \citerefs{Kang_2016, kang_2020}, are beginning to question the validity of these results and that the universe may not be accelerating at all. These studies have faced a large amount of criticism, however. \citeref{kang_2020} in particular tries to invalidate the use of type Ia supernovae as an accurate standard candle using arguments based upon a potential luminosity evolution. It is worth noting that they arrive at their conclusion based upon a sample of only 30 out of the thousands of possible supernovae measurements to date and therefore could be subject to selection bias.

\subsection{Observed composition of the universe}

Let us now take the opportunity to solve the Friedman equations in light of modern surveys of cosmological parameters. In this research we shall use the parameters observed in the Planck 2018 results \cite{planck_2018}, which are derived from analysis of CMB anisotropies, BAO and type Ia supernovae. Some of the parameters with significance to this research have been included directly and are presented in \citetab{params}.

\input{2_Chapters/2_Properties/Params}

The Planck results provide us with an observation of $\Omega_{k,0}$. This is the curvature parameter and is defined such that,
\begin{equation}
    \Omega_{k,0} = \frac{k}{a_0^2H_0^2},
\end{equation}
from \citeeqn{param-def}. Thus we can see that our universe appears to be flat, with $k=0$ in the Friedman equation. This simplifies \citeeqn{friedmann-eqn-L} and \citeeqn{friedmann-acceleration-L}, making them solvable analytically for our universe by assuming one fluid dominates over the others in different epochs. To begin we must first consider the properties of these fluids. We have made the simplifying assumption based upon the cosmological principle that we can model the contents of the universe as a set of barotropic perfect fluids. These fluids are such that the pressure is a function of density only. We will define the equation of state for these fluids,
\begin{equation}
    p = \omega\rho = (\gamma - 1)\rho, \label{eqn-state}
\end{equation}
where $\gamma$ (or $\omega$) is the equation of state parameter and defines the properties of the fluid. Since matter has $p=0$ we can see that $\gamma_m = 1$. For radiation we find that $\gamma_r = \sfrac{4}{3}$. Substituting this definition into \citeeqn{friedmann-fluid} along with the definition for $H$ in terms of $a$ we have,
\begin{equation}
    \frac{\dot{\rho}}{\rho} = -3\gamma\frac{\dot{a}}{a}.
\end{equation}
Which by integrating can be shown to have the solution,
\begin{equation}
    \rho = \rho_0a^{-3\gamma}, \label{friedmann-dens-sol}
\end{equation}
where $\rho_0$ is the fluids present density. Using the prior mentioned values of $\gamma$ for matter and radiation we can see the energy densities will take the form,
\begin{align}
    \rho_r &= \rho_{r,0} a^{-4}, & \rho_m &= \rho_{m,0}a^{-3},
\end{align}
where $\rho_r$ is the energy density of radiation and $\rho_m$ is the energy density of matter respectively. These can be seen plotted alongside one and other in \citefig{flrw}, where we have defined the number of e-foldings as $N = \log{(a)}$. The values of $\rho_{m,0}$ and $\rho_{r,0}$ can be calculated using the observed values of the respective density parameters from the Planck results, alongside a calculation of the critical density defined in \citeeqn{critical-dens-def} and thus $H_0$, which is also observed by Planck and included in \citetab{params}.


\begin{figure}[ht]
    \includegraphics[width=\linewidth]{2_Chapters/2_Properties/Images/flrw.eps}
    \caption{A comparison of density contributions predicted by the Friedman equation as a function of $N$, the number of e-foldings. Axes have been left intentionally blank as this figure is for illustrative purposes, highlighting how the universe can evolve from an initially radiation dominated epoch, into matter domination, then finally into a dark energy dominated epoch. }
    \label{flrw}
\end{figure}

We can continue to solve for our universe by considering what happens when one fluid dominates the majority of the energy density of the universe. When this is the case, such as for matter and radiation at early times seen in \citefig{flrw}, the contribution from the other fluids in the Friedman equations becomes negligible. This simplification compounded with the observation that $k=0$ allows us to substitute \citeeqn{friedmann-dens-sol} into the Friedman equations and solve to find,
\begin{equation}
    a(t) = a_0 \left( \frac{t}{t_0} \right)^{\dfrac{2}{3\gamma}},
\end{equation}
and thus 
\begin{equation}
    H = \frac{2}{3\gamma}\frac{t_0}{t},
\end{equation}
where $t_0$ is the present time. Again note that this solution only holds when a single fluid dominates over the others.

A similar argument can be made for the cosmological constant. We can see from equation \citeeqn{friedmann-dens-sol} that for the cosmological constant to have a constant energy density, it must have $\gamma_\Lambda = 0$. Using this value in \citeeqn{eqn-state}, the equation of state, confirms that dark energy will have a negative pressure and thus cause accelerated expansion. The cosmological constant is graphed alongside matter and radiation in \citefig{flrw}, it demonstrates that at late times the cosmological constant will dominate over the other fluids in the universe. During this epoch of dark energy domination we can neglect the effects of the other fluids in the Friedmann equation and \citeeqn{friedmann-eqn-L} becomes,
\begin{equation}
    H^2 = \left(\frac{\dot{a}}{a}\right)^2 = \frac{\Lambda}{3}.
\end{equation}
This is a de-Sitter universe and has the solution,
\begin{equation}
    a(t) = a_0\exp{\sqrt{\frac{\Lambda}{3}}t} = a_0e^{Ht}.
\end{equation}
It is incredibly clear here that at late times, when the cosmological constant dominates, we would expect to see an exponential expansion of the universe. The Planck results found $\Omega_{\Lambda,0} \approx 0.7$, seen in \citetab{params}, indicating a clear domination of dark energy at the present time and therefore an accelerating expansion is expected, this is perfectly in tune with the observations discussed previously made in \citeref{Riess_1998}. This result also comes as somewhat of a surprise, as it suggests that since the universe is dominated by dark energy, almost $70\%$ of the universe is comprised of this exotic energy that has yet to be detected directly.

\section{Cosmological Scalar Fields}
We have discussed the cosmological constant and how it can give rise to the observed accelerated expansion of the universe. We have also seen that there are significant problems associated with the cosmological constant, greatly motivating research into alternative mechanisms to explain the said acceleration. In this section we will take the idea of a fluid with negative pressure and not disregard it as non-physical, as Einstein did. Given the correct criteria are met, we will see that a scalar field can readily act as a fluid with these properties. This is also motivated by the familiarity of scalar fields in the subject of cosmology as a whole, being almost synonymous with inflation. Scalar fields can be shown to provide a vacuum energy driving the huge exponential expansion required by inflation, as outlined by Guth \cite{Guth_1981}. In this research, however, we will be considering the late time effects of a scalar field to explain the present accelerating epoch, rather than inflation. There are several models of scalar field dark energy, many reviewed in \citeref{COPELAND_2006}, all providing a negative pressure in a subtly different way. Of particular note to us will be quintessence.

\subsection{Quintessence}
In \citeref{Ratra_1988} Ratra and Peebles first propose an idea that has come to be known as quintessence. The main difference from the cosmological constant model, and is true of other scalar field models, is that the energy density does not remain constant and evolves throughout time. To begin we must first note that from \citeeqn{friedmann-acceleration} and the requirement of $\ddot{a} > 0$, 
\begin{equation}
    \rho + 3p < 0. \label{addot-negative}
\end{equation}
Combining with \citeeqn{eqn-state}, we can tighten the requirements of an acceleration inducing fluid to,
\begin{align}
    &\omega < -\sfrac{1}{3}, & or & &\gamma < \sfrac{2}{3}. \label{eqn-state-acceleration}
\end{align}
This result is significant because it allows us to easily examine whether a scalar field, or any barotropic fluid in our model, is meeting the requirements for acceleration at any particular moment. The distinction 'at any particular moment' was made here because unlike matter and radiation, the equation of state parameter of the scalar field will not be constant in time.

To see how this constrains a scalar field, we start with the energy-momentum tensor for a scalar field $\phi$ \cite{Franklin_2010},
\begin{equation}
    T^{\mu\nu} = - \left( g^{\mu\nu}\mathcal{L}_\phi + 2\frac{\partial \mathcal{L}_\phi}{\partial g_{\mu\nu}}\right),
\end{equation}
where $g_{\mu\nu}$ is the metric tensor and $\mathcal{L}_\phi$ is the Lagrangian of the scalar field defined,
\begin{equation}
    \mathcal{L}_\phi = \frac{1}{2}(\partial_\mu\phi) (\partial^\nu\phi) - V(\phi),
\end{equation}
Which takes the form of a classical Lagrangian, namely kinetic energy minus potential energy, $V(\phi)$ being some function representing the potential.
Equating this form of the energy momentum tensor with that of a perfect fluid, as seen in \citeeqn{friedmann-emtensor}, we can write down the pressure and density of the scalar field in terms of the energies,
\begin{equation}
    \rho_\phi = \frac{1}{2}\dot{\phi}^2 + V(\phi),
\end{equation}
\begin{equation}
    p_\phi = \frac{1}{2}\dot{\phi}^2 - V(\phi),
\end{equation}
where dots represent time derivatives and again $\phi$ is the value of the field itself. With these expressions we can use \citeeqn{addot-negative} to see what is required of a scalar field to constitute an acceleration. Substituting we find,
\begin{equation}
    \dot{\phi}^2 < V(\phi). \label{scalar-condition}
\end{equation}
This can also be seen if we use \citeeqn{eqn-state} to write down the equation of state for a scalar field,
\begin{equation}
    \omega = \frac{\rho}{p}= \frac{\dot{\phi}^2 + 2V(\phi)}{\dot{\phi}^2 - 2V(\phi)}.
\end{equation}
The criteria in \citeeqn{scalar-condition} is almost at odds with nature, as in most physical processes we see that the potential is minimised. However, scalar fields are not very efficient at doing so, especially if they do not couple to matter \cite{Peebles_2003}.
To further the analysis of these scalar fields we can substitute the density and pressure expressions into the Friedman equations. For a spatially flat universe only containing a scalar field they become
\begin{align}
        \left(\frac{\dot{a}}{a}\right)^2 &= \frac{\kappa^2}{3}\left(\frac{1}{2}\dot{\phi}^2 + V(\phi)\right), \nonumber\\ \label{friedmann-eqn-field}
    \frac{\ddot{a}}{a} &= -\frac{\kappa^2}{3}\left( \dot{\phi}^2 - V(\phi) \right).
\end{align}
The final equation comes from making the same substitutions into the fluid equation, \citeeqn{friedmann-fluid},
\begin{equation}
    \ddot{\phi} + 3H\dot{\phi} + \frac{dV(\phi)}{d\phi} = 0. \label{klein-gordon}
\end{equation}
This equation is of particular note because it takes the form of a Klein-Gordon equation. The equation is also similar in form to a driven harmonic oscillator in $\phi$, allowing us to interpret $3H$ as a resistance, or 'Hubble friction', and $\sfrac{dV(\phi)}{d\phi}$ as a driving force.

\subsection{Forms of the potential}

The depth of our analysis has so far been limited by the potential function $V(\phi)$. Keeping this function general has allowed us to find general results for all scalar fields, such as \citeeqn{scalar-condition}, but to go any further we must use a specific form of the potential. Unfortunately, as outlined in \citeref{modcosmo_2019}, there is no established fundamental theory of dark energy and so the potential is chosen to suit the model arbitrarily. An example scalar field potential known to exist would be the Higgs potential \cite{Higgs_1964},
\begin{equation}
    V(\phi) = \lambda(\phi^2 - M^2)^2,
\end{equation}
where both $\lambda$ and $M$ are free parameters. Free parameters are quite common in scalar fields, requiring different properties of the field usually leads to constrains on the values these free parameters can take. The largest difference here is that the form of the potential for the Higgs mechanism is guided by a fundamental theory, which as stated we lack for dark energy. In the context of dark energy we are free to choose any potential we like, in the first instance, Ratra and Peebles chose a potential of the form,
\begin{equation}
    V(\phi) = M^{4+n}\phi^{-n}.
\end{equation}
where $M$ is a free parameter and $n$ is chosen for different models, $n=2$ is common \cite{Ratra_1988,Peebles_2003}. It was noted that these forms of potential had 'attractor' solutions and that fine tuning in the initial conditions of the system was removed, as the system would tend towards an attractor regardless of inital conditions. In \citeref{Zlatev_1999} this form of potential is analysed once again. They also prefer the term 'tracking' solutions rather than attractor solutions, a term which we shall also adopt intermittently. This is to highlight that the tracking solutions are slightly different to traditional attractor solutions in autonomous systems, as they are not fixed points. This is because the ratio of the fields energy to the background decreases as it travels down its track \cite{Zlatev_1999}. In this article they also show another potential that more closely exhibits the 'self-adjusting' tracker behaviour is the simple exponential potential,
\begin{equation}
    V(\phi) = V_0 e^{-\lambda \kappa \phi},
\end{equation}
where $V_0$ is a free parameter, and $\lambda$ is used for adjusting the steepness of the potential. This form of potential will be the focus of this report motivated by \citeref{Copeland_1998}. Also due to its simplicity and tracking solutions, it also has useful properties such as an exact solution to the Friedmann equations.


\subsection{Exact solution for exponential potentials}
 An interesting property of the exponential potential is that it can be shown to have an exact solution to the Friedmann equation \cite{Peebles_2003}. Using an ansatz,
\begin{equation}
    a(t) \propto t^p, \label{powerlawexpansion}
\end{equation}
which is common when solving the Friedmann equation and,
\begin{equation}
    \phi(t) \propto \phi_0 + \alpha \ln{t}.
\end{equation}
Then, by combining this with the Friedmann equations for a scalar field and \citeeqn{klein-gordon} we find,
\begin{align}
p&= \frac{2}{\lambda^2}, & \alpha &= \frac{2}{\lambda\kappa}.
\end{align}
It is clear from \citeeqn{powerlawexpansion}, for an accelerating universe we require $p > 1$, and thus we can write that
\begin{equation}
    \lambda^2 < 2. \label{exactsolution}
\end{equation}
This is a very important result. Not only does it reaffirm that scalar fields can be a source of the negative pressure accelerating the universe, but it also shows that an exponential potential can fit the criteria to do so - provided the above constraint is met.

This does not always have to be the case, however. \citerefs{Kim_2005,Liddle_1998} introduce the idea of assisted inflation. They show by having multiple scalar fields, each with its own exponential potential, the fields will act cooperatively and their effects will compound. This means that even if none of the individual fields meet the criteria to cause inflation, the net effect of the multiple fields would, thereby assisting each other.

\section{Evolution of Scalar Fields}
Scalar fields provide a candidate for dark energy, and by coupling them with an exponential potential we can be very precise about the criteria required for them to do so. Thus far we have only considered the behaviour of a scalar field in isolation and neglected the effects of the background fluids on the evolution. This can be seen in \citeeqn{friedmann-eqn-field}. We have substituted the expression for the density of the scalar field into the Friedman equation alone, whereas we have defined $\rho$ to be the sum of all density contributions in our universe, which therefore should include matter and radiation. Including multiple fluids in the Friedmann equation mean that it no longer has an analytical solution. We will first review the technique used in \citeref{Copeland_1998} and write the Friedmann equation as a set of autonomous differential equations, which we can solve numerically. Since we are investigating the late time behaviours of the system, we will also perform a fixed point analysis to gain a more qualitative insight into the attractor solutions and general behaviour of the system. Once understood we can extend the work of \citeref{Copeland_1998} and aim to produce results similar to \citerefs{Barreiro_2000,Ng_2001}, more conducive to our universe.
\subsection{Equations of motion}
Assuming the universe contains a scalar field with a single background fluid, which we shall represent with the equation of state parameter $\gamma$, then the contributions to the overall density of the universe become,
\begin{equation}
    \rho = \rho_\phi + \rho_\gamma,
\end{equation}
where $\rho_\gamma$ is the density contribution of the background fluid. Thus from the definition for the density of a scalar field $\phi$ we can write this,
\begin{equation}
    \rho = \frac{1}{2}\dot{\phi}^2 + V(\phi) + \rho_\gamma.
\end{equation}
The Friedmann equation in flat space with a zero cosmological constant will therefore be,
\begin{equation}
    H^2 = \frac{\kappa^2}{3}\left( \frac{1}{2}\dot{\phi}^2 + V(\phi) + \rho_\gamma \right).
\end{equation}
\citeref{Copeland_1998} show by making the definitions of two dimensionless quantities $x$ and $y$ based up on this equation,
\begin{align}
    x &\equiv \frac{\kappa\dot{\phi}}{\sqrt{6}H}, & y &\equiv \frac{\kappa\sqrt{V}}{\sqrt{3}H}, \label{xy-def-1fluid}
\end{align}
then the Friedmann equation can be written in a simplified form,
\begin{equation}
    1 = x^2 + y^2 + \frac{\kappa^2 \rho_\gamma}{3H^2}.
\end{equation}
One feature we may note straight away is that the density parameter of the scalar field in terms of $x$ and $y$ is,
\begin{equation}
    \Omega_\phi = x^2 + y^2.
\end{equation}
Since there is a direct correspondence between this value and the observed values of dark energy, $\Omega_\Lambda$, from the Planck results, this will become particularly useful when constraining the model to be in accordance with observation.

To directly derive the equations of motion for this system, one must differentiate both definitions of $x$ and $y$ with respect to $N$, the number of e-foldings. This has the useful property,
\begin{equation}
    x'= \frac{dx}{dN} = \frac{1}{H}\dot{x}, \label{tN-relationship}
\end{equation}
where $\dot{x}$ is the derivative with respect to time $t$. Combining this with the other two remaining Friedman equations and utilising that the exponential potential we have chosen for our model has,
\begin{equation}
    \frac{dV(\phi)}{d\phi} = -\kappa\lambda V(\phi), \label{potential-property}
\end{equation}
the equations governing the evolution of $x$ and $y$ can be written as an autonomous system of coupled differential equations,
\begin{align}
    x' &= -3x + \lambda\sqrt{\frac{3}{2}}y^2 + \frac{3}{2}x \left[ 2x^2 + \gamma(1-x^2-y^2)\right], \nonumber \\
    y' &= -\lambda\sqrt{\frac{3}{2}}xy + \frac{3}{2}y \left[ 2x^2 + \gamma(1-x^2-y^2)\right], \label{evo-1fluid}
\end{align}
where $\gamma$ is the equation of state parameter of the background fluid and $\lambda$ is the steepness of the potential.
    
In \citeref{Copeland_1998} they present fixed point analysis of the system. That is to say, they find solutions for which the equations satisfy $x' = y'= 0$. These solutions are presented in \citetab{criticalpoints-1fluid-general}. It is worth observing that since the equation governing the motion of $y$ contains a factor of $y$ multiplying each term, the motion will be symmetric in the $y$ axis. Because of this, when displaying fixed points and figures we will default to using the positive $y$.

\input{4_Tables/1_CriticalPoints/1_fluid/General}

Analysis of fixed, or critical, points show that the system evolves in several different ways depending on the values of $\gamma$, $\lambda$ and the initial conditions of $x$ and $y$. In each case, however, there is a late-time attractor which the energy density of the scalar field will naturally tend towards and remove any fine tuning in the initial conditions. \citefig{1fluid1} and \citefig{1fluid2} highlight this behaviour by overlaying multiple simulations, each with different initial conditions, and showing how they all tend to the same fixed point.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/1fluid1.eps}
\caption{The phase plane for $\gamma=1$ and $\lambda=1$. The fixed points are represented with a cross. The late time attractor is Point (c) in \citetab{criticalpoints-1fluid-general} and corresponds to the scalar field dominated solution at $x=\sfrac{\sqrt{6}}{6}$, $y=\sfrac{\sqrt{30}}{6}$.}
\label{1fluid1}
\end{figure}
\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/1fluid2.eps}
\caption{The phase plane for $\gamma=1$ and $\lambda=3$. The fixed points are represented with a cross. The late time attractor is Point (d) in \citetab{criticalpoints-1fluid-general} and corresponds to the scaling solution at $x=y=\sfrac{\sqrt{6}}{6}$.}
\label{1fluid2}
\end{figure}

While the analysis of fixed points allows us to see their location in the phase plane, it does not allow us to analyse their stability and therefore if they will be a late time attractor of the system. To do so the system is perturbed around each fixed point and the behaviour expressed in matrix form. The sign of the eigenvalues will then determine whether the fixed point is stable, the case when all eigenvalues are negative. It is common for the stability of the fixed points to depend on both $\gamma$ and $\lambda$, however for some of the trivial solutions this is not the case. The eigenvalues for each fixed point in this system are included in \citetab{eigenvalues-1fluid-general}. Three of the fixed point solutions do not provide useful properties and correspond to unstable nodes or saddle points. It is worth noting that Point (a), the background fluid dominated solution, shows us that for any $\gamma > 0$, the solution is unstable and the energy density of the scalar field can never vanish with respect to the fluid. The final two remaining points offer stable nodes with varying properties.

Point (c) is a stable node and late-time attractor for $\lambda^2 < 3\gamma$. If we note that for the scalar field we can express the equation of state,
\begin{equation}
    \gamma_\phi = \frac{\rho_\phi + p_\phi}{\rho_\phi} = \frac{2\dot{\phi}^2}{\dot{\phi}^2 + 2V(\phi)} = \frac{2x^2}{x^2 + y^2}, \label{gamma-effective}
\end{equation}
then we can readily show,
\begin{equation}
    \gamma_\phi = \frac{\lambda^2}{3}
\end{equation}
for Point (c). Thus from \citeeqn{eqn-state-acceleration} the point corresponds to accelerating expansion for $\lambda^2 < 2$. This is the result we saw in \citeeqn{exactsolution} when there was no background fluid present. This is consistent since at this fixed point there is essentially no background fluid present either, as $\Omega_\phi = 1$ and so it corresponds to scalar field domination.

Point (d) is a stable node and late-time attractor for $\lambda^2 > 3\gamma$. This node cannot be responsible for accelerated expansion, however it does have interesting properties. This node corresponds to a universe where the background fluid and scalar field both contribute to the evolution of the expansion and neither dominates. This is called a scaling solution and is where the energy density of the field is proportional to the fluid. This would allow for the universe to evolve as if it was dominated by matter or radiation as the field will mimic them in the background. This can be seen more directly by noting that the equation of state parameter for the scalar field becomes equal to that of the background fluid, $\gamma_\phi= \gamma$.

While this analysis provides a stable solution that corresponds to a late-time acceleration, it contains a significant problem. Dark energy has not always dominated, moreover, there are tight constraints on the energy density of dark energy at the time of nucleosynthesis. In the radiation dominated era, there is a requirement based upon standard model degrees of freedom,
\begin{equation}
    \Omega_\phi < 0.2. \label{nucleo-requitment}
\end{equation}
The attractor at Point (c) cannot satisfy this, as it has $\Omega_\phi = 1$. However, the scaling solution has an energy density of $\Omega_\phi = 3\gamma/\lambda^2$. Combining this with the above constraint and noting that $\gamma = 4/3$ for radiation we require,
\begin{equation}
    \lambda^2 > 20.
\end{equation}
This is a perfectly acceptable requirement in the scaling regime, but it means we cannot have an accelerated expansion if we would like our scalar field to obey this constraint. While it would be possible to start our system at a position in phase space that would initially satisfy this constraint, then letting the system evolve into the accelerating solution, we would be introducing fine tuning of these values by doing so and this should therefore be avoided where possible.


    
\subsection{Introducing a second background fluid}

To bring our model into further alignment with the universe, it would make sense for it to contain two background fluids alongside the scalar field. Although the contributions could be broken down further, such as making a distinction between dark matter and baryonic matter, results such as those from Planck, \citetab{params}, suggest that the contents of the universe is generally contained within matter, radiation and dark energy. Introducing a second background fluid into the system would bring the model into closer alignment with this. To differentiate between these fluids we shall use a subscript on the equation of state parameter, $\gamma_1$ and $\gamma_2$ referring to the first and second fluid respectively. With the inclusion of these fluids the total density of the universe is,
\begin{equation}
    \rho = \frac{1}{2}\dot{\phi}^2 + V(\phi) + \rho_{\gamma_1} + \rho_{\gamma_2},
\end{equation}
where now $\rho_{\gamma_1}$ is density of the first and $\rho_{\gamma_2}$ is the density of the second fluid. To derive the evolution equations for this system, similar definitions must be made to those in the single fluid case, \citeeqn{xy-def-1fluid}. This time however we will define a third parameter $z$ that will govern the evolution of the additional fluid. The definitions are,
\begin{align}
    x &\equiv \frac{\kappa\dot{\phi}}{\sqrt{6}H}, & y &\equiv \frac{\kappa\sqrt{V}}{\sqrt{3}H}, & z &\equiv \frac{\kappa\sqrt{\rho_{\gamma_2}}}{\sqrt{3}H}, \label{xy-def-2fluid}
\end{align}
all of which follow from substituting the total density into the Friedmann equation, which allows us to now write,
\begin{equation}
    1 = x^2 + y^2 + z^2 + \frac{\kappa^2 \rho_{\gamma_1}}{3H^2}.
\end{equation}
It is from this equation we can follow the same procedure as before, differentiating each of the parameters and leveraging properties of the exponential potential. We find the evolution equations for a system with two fluids and a scalar field to be,
\begin{align}
    x' =& -3x + \lambda\sqrt{\frac{3}{2}}y^2 + \frac{3}{2} \mathcal{F}x \nonumber \\
    y' =& -\lambda\sqrt{\frac{3}{2}}xy + \frac{3}{2} \mathcal{F}y \nonumber \\
    z' =& - \frac{3}{2}\gamma_2z + \frac{3}{2} \mathcal{F}z
     \label{evo-2fluid}
\end{align}
where for compactness we have defined,
\begin{equation}
    \mathcal{F} \equiv  2x^2 + \gamma_2z^2 +\gamma_1(1-x^2-y^2-z^2).
\end{equation}
We can note here that like the equation for $y$, the equation for $z$ contains a factor of $z$ in each term. This implies that the behaviour of $z$ will be symmetric around the z axis and we shall therefore only display positive $z$ in figures and fixed points, as we already do with $y$.

In the same manner as in the previous section, we can conduct fixed point analysis of the system by setting $x' = y' = z' = 0$. The results of these calculations have been included in \citetab{criticalpoints-2fluid-rad} for the case where the fluids are matter and radiation, however they are also included for the case with general fluids $\gamma_1$ and $\gamma_2$ in \citetab{criticalpoints-2fluid-general}. The results of the fixed point analysis for this system bare a strong resemblance to the system with only a single background fluid. This is because many of the fixed points are for the case where $z=0$, causing the evolution equations to collapse down to the single fluid equations at this point. This is a good indication that the mathematics is correct, however it also indicates that the problems highlighted at the end of the last section still exist.

Points (a) and (c) existed in the previous system, being two of the more trivial solutions where the background fluid or kinetic energy completely dominates. Point (b) is a solution not present in the previous system, this is because it corresponds to the domination of the second fluid, otherwise sharing the same properties as Point (a). Similarly, Point (f) is new to this system and shares the same properties as Point (e), which was the scaling solution in the previous system. Point (f) again has the subtle difference that the field will scale with the new second background fluid, meaning it is possible for the field to scale with either fluid depending on the value of $\lambda$. 

\input{4_Tables/1_CriticalPoints/2_fluid/Radiation}

While the other points in this system were also found in the single fluid case, their properties do not necessarily remain unchanged. Point (d) in \citetab{criticalpoints-2fluid-rad} appears to have the same stability criteria as the corresponding point in the single fluid case, \citetab{criticalpoints-1fluid-general}. However, upon closer inspection of the general solutions mentioned in \citetab{criticalpoints-2fluid-general}, we can see this is only because matter has an equation of state parameter that is less than that of radiation. Had we introduced a fluid with an equation of state parameter less than for matter, the stability criteria would have changed. This will become more significant when discussing domain walls.  

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/2fluid1.eps}
\caption{The phase plane for $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda=3$. The fixed points are represented with a cross. The late time attractor is Point (e) in \citetab{criticalpoints-2fluid-rad} and corresponds to the scaling solution at $x=y=\sfrac{\sqrt{6}}{6}$, $z=0$. The dashed curve represents a simulation where the initial conditions were fine tuned so that it would interact with the saddle point, Point (f) in \citetab{criticalpoints-2fluid-rad}. Note that this figure is only displaying the 2d projection of the xy plane of what is a 3d system.}
\label{2fluid1}
\end{figure}

Since both new Points (b) and (f) are unstable, the evolution of the phase plane remains very similar to the behaviour seen in the single fluid case. \citefig{2fluid1} demonstrates this similarity by overlaying simulations with the same initial conditions of that in \citefig{1fluid2}, and we can see they trace almost identical paths ending at the same late time attractor. This figure also demonstrates how by fine tuning the initial conditions we can force the path to interact with the saddle point caused by the second fluid. In general, though, while the introduction of a second fluid has increased the accuracy of the model, it has not provided any solutions to the problems highlighted in the previous section and we still cannot have our system in the scaling solution at early times and then transfer to the accelerating solution at late times without fine tuning of initial conditions. 

\subsection{Deriving conditions for acceleration}

When analysing the evolution of our system, we have been speaking about the late time behaviour and when the system is at a fixed point, this is important when trying to understand if the system will cause an acceleration in the universe. For instance, we know that the scalar field will cause an accelerating expansion when it is at Point(d) in the presence of two background fluids, however, the acceleration is not exclusive to this point and may begin when the system is in the area around this point before the point is reached. We cannot tell if this is the case by analysing the fixed points and we cannot see this from the equations of motion as they have no analytical solutions. We shall now manipulate the equations governing our model to find conditions that describe when the acceleration has begun and later compare them to the known criteria already derived, \citeeqn{eqn-state-acceleration} for example.

Let us first differentiate the definition of the Hubble parameter with respect to time,
\begin{equation}
    \dot{H} = \frac{\ddot{a}}{a} - H^2,
\end{equation}
by dividing the equation through by $H$ and utilising the relationship between $t$ and $N$ in \citeeqn{tN-relationship} we find,
\begin{equation}
    H' + H = \frac{\ddot{a}}{\dot{a}},
\end{equation}
where dots are time derivatives and primes are derivatives with respect to $N$. This can become a criteria for acceleration by noting that for $\ddot{a}>0$,
\begin{equation}
    H'+H > 0,
\end{equation}
or alternatively,
\begin{equation}
    \frac{H'}{H} > -1. \label{acceleration-condition}
\end{equation}
This becomes useful when coupled with an expression for $H$ in terms of the parameters of scalar fields. We can use the definition of $y$ to write the Hubble parameter,
\begin{equation}
    H = \frac{\kappa\sqrt{V}}{\sqrt{3}y},
\end{equation}
and then include the full definition of the exponential potential,
\begin{equation}
    H = \frac{\kappa\sqrt{V_0}}{\sqrt{3}y}\exp{\left[ \frac{\kappa\lambda\phi}{2} \right]}, \label{acceleration-with-potential}
\end{equation}
which we can then differentiate to yield a differential equation in $H$,
\begin{equation}
    H' = -\frac{1}{2}\kappa\lambda\phi'H. \label{acceleration-ode}
\end{equation}
We can eliminate the $\phi'$ term in this equation using the definition of $x$ and finally,
\begin{equation}
    \frac{H'}{H} =  -\frac{\sqrt{6}}{2}\lambda x. \label{acceleration-condition-x}
\end{equation}
It would appear that we could now simply plot this function and by comparing it with \citeeqn{acceleration-condition} be able to tell the exact moment the system produced an acceleration. Unfortunately, however, when calculating \citeeqn{acceleration-ode} we made the implicit assumption that $y$ was constant, making it only valid yet again at late times once the system has already reached a fixed point. We could still combine it with the criteria in \citeeqn{acceleration-condition} for,
\begin{equation}
    x < \frac{\sqrt{6}}{3\lambda},
\end{equation}
where indeed we see that the only fixed point capable of providing an acceleration is Point (d), as expected. While this does not solve the initial goal, it does confirm that this technique is suitable and worth perusing.

A second approach is to alternatively start with the definition of $x$ and use it to express $\phi'$,
\begin{equation}
    \phi'= \frac{1}{H}\dot{\phi} = \frac{\sqrt{6}}{\kappa}x.
\end{equation}
By integrating this we have an expression for $\phi$, which we can substitute into \citeeqn{acceleration-with-potential}. From $H$ it is then trivial to then calculate $\sfrac{H'}{H}$. Doing this analytically will yield the same result as found previously, however doing this numerically does not require the assumption of constant $x$ or $y$ and we can therefore see exactly when the acceleration begins. \citefig{acceleration1} shows an example simulation of this, where we can see as the system approaches the a late time attractor, the value of $\sfrac{H'}{H}$ crosses the boundary of \citeeqn{acceleration-condition} and therefore causes an acceleration, but more importantly we can now see it does this before reaching the fixed point exactly. 

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/acceleration1.eps}
\caption{$\sfrac{H'}{H}$ as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda=1$, starting with initial conditions $x=-1$, $y=0$, $z=0$. We would expect this system to have a late time acceleration and that is predicted, however note that we can see the acceleration begins before the system reaches the fix point exactly. Acceleration conditions are first met at $N \approx 2.78$. The small oscillations in the curve can be attributed to the spiral nature of the fixed points and thus the $x$ position has small periodic changes as the field orbits the point in phase space.}
\label{acceleration1}
\end{figure}

A second method to achieve this is to calculate the value of $\gamma_\phi$ at each point in time using \citeeqn{gamma-effective}, again numerically, and compared with the criteria for acceleration given in \citeeqn{eqn-state-acceleration}. This method, however, breaks down when $x$ and $y$ approach zero simultaneously. \citefig{acceleration-gamma} successfully performs this method using the same simulation as \citefig{acceleration1} and can therefore be cross-referenced to see that they both predict acceleration to occur at the same time.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/accelerationgamma.eps}
\caption{$\gamma_\phi$ as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda=1$, starting with initial conditions $x=-1$, $y=0$, $z=0$. This methods successfully predicted acceleration, however this is because the system never approached $x=y=0$. Acceleration conditions are first met at $N \approx 2.78$.}
\label{acceleration-gamma}
\end{figure}

\newpage
\subsection{A modified potential}

To accurately model the evolution of our universe we require that the scalar field begins in a scaling solution, where it tracks the background fluid and neither fully dominates. Then, makes a transition from the scaling solution into the scalar field dominated solution where it will cause the observed late time acceleration of the universe. By extending the scalar field model to accommodate two background fluids we further aligned it with our universe, however it did not provide the trigger we needed to make a transition between the two points. A natural step would be to have $\lambda$ vary with time, starting at a value that has the scaling solution as the attractor, and ending at a value when the scalar field solution takes its place, this has been postulated in for example \citerefs{Ng_2001,Macorra_2000}. The problem with this method is that it introduces a second arbitrary function controlling the dynamics of $\lambda$, we already have an arbitrary function we cannot derive from fundamental physics in the form of $V(\phi)$ and by introducing a second would increase the number of degrees of freedom that would need to be somehow constrained. We shall instead take the path of modifying the potential function to be a sum of exponentials. We shall define it,
\begin{equation}
    V(\phi) = V_1(\phi) + V_2(\phi) = V_{1,0}e^{-\kappa\lambda_1\phi} + V_{2,0}e^{-\kappa\lambda_2\phi},
\end{equation}
where $V_{1,0}$ and $V_{2,0}$ are free parameters, and $\lambda_1$ and $\lambda_2$ are the slope of each potential. The modification of this potential causes problems for our current equations of motion, as when deriving them we used the property in \citeeqn{potential-property}, which no longer holds for this modified $V(\phi)$. We can however use that this property still holds for the individual exponentials $V_1(\phi)$ and $V_2(\phi)$, and redefine our term $y$ in the equations of motion as two separate variables $y_1$ and $y_2$. The definitions will therefore be,
\begin{align}
     x &\equiv \frac{\kappa\dot{\phi}}{\sqrt{6}H}, & y_1 &\equiv \frac{\kappa\sqrt{V_1}}{\sqrt{3}H}, \nonumber \\
     z &\equiv \frac{\kappa\sqrt{\rho_{\gamma_2}}}{\sqrt{3}H}, & y_2 &\equiv \frac{\kappa\sqrt{V_2}}{\sqrt{3}H}, \label{xy-def-2fluid-mod}
\end{align}
As before, we can then write the Friedman equation in the form,
\begin{equation}
    1 = x^2 + y_1^2 + y_2^2 + z^2 + \frac{\kappa^2 \rho_{\gamma_1}}{3H^2}.
\end{equation}
By following the same steps taken to derive the equations of motion in the previous cases, we find the evolution equations for the system with a modified potential to be,
\begin{align}
    x' =& -3x + (\lambda_1y_1^2 + \lambda_2y_2^2)\sqrt{\frac{3}{2}} + \frac{3}{2} \mathcal{G}x \nonumber \\
    y_1' =& -\lambda_1\sqrt{\frac{3}{2}}xy_1 + \frac{3}{2} \mathcal{G}y_1 \nonumber \\
    y_2' =& -\lambda_2\sqrt{\frac{3}{2}}xy_2 + \frac{3}{2} \mathcal{G}y_2 \nonumber \\
    z' =& - \frac{3}{2}\gamma_2z + \frac{3}{2} \mathcal{G}z
     \label{evo-2fluid-mod}
\end{align}
where again for compactness we have defined,
\begin{equation}
    \mathcal{G} \equiv  2x^2 + \gamma_2z^2 +\gamma_1(1-x^2-y_1^2-y_2^2-z^2).
\end{equation}
As before we can see that $y_1$, $y_2$ and $z$ will be symmetric around their respective axes and we shall therefore only display the positive values for each.

\input{4_Tables/1_CriticalPoints/2_fluid_modified/Radiation}

Calculating the fixed points of this system requires we set $x=y_1=y_2=z=0$, the derivation for which follows much the same structure as the previous case. Every fixed point that had a $y$ value in the previous system now appears twice, once with $y_2=0$ and all references to a $\lambda$ being a $\lambda_1$, and again with $y_1=0$ and all references to a $\lambda$ being replaced with a $\lambda_2$. The fixed points for a system with $\gamma_1=1$ and $\gamma_2=\sfrac{4}{3}$ for matter and radiation have been included in \citetab{criticalpoints-2fluid-mod-rad}, where this symmetry can be seen first hand. The fixed points for the general case can also be seen in \citetab{criticalpoints-2fluid-mod-general}. Finding the stability for this system is much more involved, however, since to find the eigenvalues a quartic equation must be solved. The eigenvalues of both the general case and the case for matter and radiation can be seen in \citetab{eigenvalues-2fluid-mod-general} and \citetab{eigenvalues-2fluid-mod-rad}.


An exception to this is the new solution, Point (j). This point only exists for $\lambda_1\lambda_2 < 0$ which means they must have opposing signs. While this case does not produce the effect we are trying to achieve, it does produce interesting dynamics. A simulation for this case can be seen in \citefig{2fluid_mod1}. The motion in this regime is a result of the potential having a minima at a finite value and the system oscillating around this minima. This point has $\gamma_\phi=0$ and will therefore act like a cosmological constant, however the earlier oscillations are not observed in redshifts nor as an artifact in the CMB \cite{planck_2018} and this case can be discounted.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/2fluid_mod1.eps}
\caption{The phase plane for $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=-\lambda_2=3$. The fixed points are represented with a cross. Since there is no definition for $y$ in this system, the axis displays $y = \sqrt{y_1^2+y_2^2}$. This demonstrates the harmonic oscillation around the minima of the potential. While it is still possible for the system to interact with fixed points other than Point (j), unless they become very close it Point (j) is the late time attractor for many paths. The $z$ axis is not represented in this figure.}
\label{2fluid_mod1}
\end{figure}

The most significant improvement of this model is that it now has the ability to have both scaling and accelerating solutions present at the same time. Previously in the models with a single exponential potential, the system would have a scaling solution when $\lambda$ was in one region, and the accelerating solution when $\lambda$ was in a separate non-overlapping region. We can now see from \citetab{criticalpoints-2fluid-mod-rad} there are two scaling solutions and two accelerating solutions, each of which has an existence only depending on either $\lambda_1$ or $\lambda_2$ exclusively. Setting $\lambda_1$ to be in the accelerating regime and $\lambda_2$ to be in the scaling regime we will have both points in existence at the same time, making it possible for the system to visit both. This is how the modified potential will facilitate a transition between regimes.

The reason this transition takes place can be seen by analysing the magnitude of the eigenvalues in \citetab{eigenvalues-2fluid-mod-rad}. By calculating these we cannot say definitively that a point is stable, only unstable. we can however say that a point will be resistant to small perturbations. We can define a timescale,
\begin{equation}
    N_s = \mu^{-1},
\end{equation}
where $\mu$ is an eigenvalue and $N_s$ is how long the field is likely to be stable around a fixed point. By substituting eigenvalues into this, it would be possible to to show that the timescale for stability is shorter than the length of the simulation for the scaling solutions. This will cause them to leave the scaling solution and transition over to the accelerating solution.

Having both of these fixed points in existence means at early times we could have the system spiraling into the scaling solution and tracking a background fluid, then at later times be picked up by the accelerating solution and cause the observed late time effects. \citefig{2fluid_mod2} and \citefig{2fluid_mod3} show results from a simulation confirming this behaviour is possible. The field initially tracks the background fluid, matter in this case, which is confirmed by \citefig{2fluid_mod2}, since the fields equations of state parameter matches that of matter. Then the field undergoes a transition into an accelerating regime as $\gamma_\phi$ decreases until it crosses the threshold for acceleration. This is separately confirmed by \citefig{2fluid_mod3}. Using \citeeqn{acceleration-condition-x} we can calculate that when the system is in the scaling regime $\sfrac{H'}{H}=-\sfrac{3}{2}$, the value at which the field stayed constant around for a prolonged period before transitioning.

From this we can confirm that using two exponential potentials we can successfully provide a mechanism causing transition from the scaling regime into an accelerating regime at late times.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/2fluid_mod2.eps}
\caption{$\sfrac{H'}{H}$ as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2 = 4$. The dashed line represents the minimum point at which acceleration can occur. We can see there is a long period where the curve is constant around $\sfrac{H'}{H}=-\sfrac{3}{2}$. From \citeeqn{acceleration-condition-x} this corresponds to the scaling solution. The system then transitions from the scaling solution into an accelerating regime, hence crossing the boundary.}
\label{2fluid_mod2}
\end{figure}

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/4_Evolution/2fluid_mod3.eps}
\caption{$\gamma_\phi$ as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2 = 4$. The dashed line represents the equation of state parameter for a fluid which produces an acceleration, the dotted like is the equation of state parameter for matter.}
\label{2fluid_mod3}
\end{figure}

\newpage
\section{Cosmological Consequences}
\subsection{Constraining the Model}
We have confirmed that the scalar field model coupled with two exponential potentials is capable of making a transition from a scaling regime into an accelerating regime, however, it does not currently reflect the properties we observe in our universe today, nor what we would expect in the past. To do this we can use real world observations to constrain some of the free parameters in our model.

We can first place constraints on the slopes of the potentials.
For $\lambda_1$ to correspond to the accelerating solution we know from previous analysis such as \citeeqn{exactsolution} that $\lambda_1^2 < 2$. This will allow for the existence of Point (d) and also means that the scaling solution Point (f) cannot exist. The constraint on $\lambda_2$ comes from the scaling solution Point (g) requiring $\lambda_2^2>3$, however we should also require that Point (e) does not exist as the saddle point could interfere with the dynamics, thus we can require instead $\lambda_2^2>6$. A second constraint comes from the density parameter of the field at early times. We know dark energy has become dominant, but in the early universe made up a very small percentage, in the Planck 2018 results the CMB suggests that $\Omega_\phi<0.1$ \cite{planck_2018}. If we require that while tracking the background the density parameter is $\Omega_\phi<0.1$, then from Point (g) we can see that $\lambda_2^2 > 30$, making the overall constraints,
\begin{align}
    \lambda_1^2 &< 2, \nonumber\\
    \lambda_2^2 &> 30. \label{lambda-constraints}
\end{align}
Based upon these constraints, in simulations we shall use $\lambda_1=1$ and $\lambda_2=7$ here forward.

At many points in this report it has been commented that fine tuning in the initial conditions of the system should be avoided and thus far we have managed to produce the generic behaviour of the universe while doing so. We could also place the constraint that $z \approx 1$ initially, as we know radiation dominated at early times, however to go any further than this would require some fine tuning of the initial conditions. If we relax this avoidance of fine tuning and start the system in a region close to the radiation scaling solution, Point (i), then the system will start in the radiation dominated era, transition to matter domination and then later scalar field domination. This behaviour can be seen in \citefig{constraint1} where the density parameter of each fluid has been plotted as a function of the number of e-foldings $N$. While this figure has all the features of the evolution of the universe, the timing is incorrect. The first modification we can make is to translate the graph such that the density parameter of the scalar field and thus dark energy is inline with that observed in \citetab{params} from \citeref{planck_2018}. We shall set this point to have $N=0$. The density parameter of the other two fluids in the simulation at this time are $\Omega_m = 0.29$ and $\Omega_r = 3.7 \times 10^{-5}$ which also coincide with the observed values in \citetab{params}. Another modification can be made by noting that the relationship between $N$ and redshift $z$ is, 
\begin{equation}
    z = e^{-N}-1,
\end{equation}
and that the redshift of matter-radiation equality is $z_{eq}\approx 3000$ \cite{modcosmo_2019}. we can further fine tune the initial conditions until this occurs at the correct time, the result of which is seen in \citefig{constraint2}.


\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/5_Consequences/constraint1.eps}
\caption{Density parameters as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2=7$, starting with initial conditions in the region of the radiation scaling solution. We can see the individual contributions to the overall density of the universe. First radiation dominates (dotted), then matter (dashed), and finally the scalar field (solid).}
\label{constraint1}
\end{figure}

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/5_Consequences/constraint2.eps}
\caption{Density parameters as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2=7$, the initial conditions have been tuned as to match the time of matter-radiation equality to observation. Note that time has been shifted so that the density parameters at present $N=0$ also match observation, where we find $\Omega_\phi = 0.70$, $\Omega_m = 0.29$ and $\Omega_r = 3.7 \times 10^{-5}$. First radiation dominates (dotted), then matter (dashed), and finally the scalar field (solid).}
\label{constraint2}
\end{figure}

With the corrected timing we can test the predictive capabilities of this model by taking a measurement of when acceleration is expected to begin. The value for the redshift at which the universe first started to accelerate is expected to be roughly $z_{a} = 0.6 \pm 0.1$ \cite{Komatsu_2009}. To probe the time the simulations expect acceleration we can use the method we derived in the previous chapter, seen in \citefig{constraint3}. The value of $\sfrac{H'}{H}$ crosses the threshold for acceleration at $z_a = 0.61 \pm 0.22$ which is within the margin of error for the observed value. \citefig{constraint3} also allows us to further appreciate the mechanism by which the scalar field model is producing the dynamics seen in these simulations. The dotted and dashed lines are calculated using \citeeqn{acceleration-condition-x} and substituting the $x$ position of the fixed points for both scaling solutions. The field can be clearly seen to spend time close to each of these fixed points before acceleration begins. The small oscillations in the curve can be attributed to the spiral nature of the fixed points and thus the $x$ position has small periodic changes as the field orbits the point in phase space, this can be seen again in \citefig{acceleration1}.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/5_Consequences/constraint3.eps}
\caption{$\sfrac{H'}{H}$ as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2=7$, the initial conditions have been tuned as to match the time of matter-radiation equality to observation. Note that time has been shifted so that at present $N=0$. Acceleration conditions are first met at $z_a = 0.61 \pm 0.22$. The small oscillations in the curve can be attributed to the spiral nature of the fixed points and thus the $x$ position has small periodic changes as the field orbits the point in phase space. The fixed points for radiation and matter scaling are dotted and dashed respectively and the threshold for acceleration is a dashed line as $\sfrac{H'}{H} = -1$.}
\label{constraint3}
\end{figure}


We may also constrain the free parameters $V_{1,0}$ and $V_{2,0}$ in the potential. From the definition of the density parameter and definition of scalar field density we can write,
\begin{equation}
    \Omega_\phi\rho_c = \rho_\phi = \frac{1}{2}\dot{\phi}^2 + V(\phi),
\end{equation}
where $\Omega_\phi$ is the density parameter of the scalar field and can be interpreted as dark energy in \citetab{params}. Using that the potential dominates over the kinetic energy of the field in the density equation allows us to write an expression for the potential by ignoring the kinetic term. In simulations, the values of the potential do not effect the dynamics and so were set to unity, this means that the ratio of these two values will give us the value of a free parameter depending on which exponential currently dominates the overall potential,
\begin{equation}
    V_0 = \frac{\Omega_\phi}{V_s(\phi)}\rho_c,
\end{equation}
where $V_0$ is the free parameter of the dominating exponential in the potential and $V_s(\phi)$ is the potential in the simulation while it is dominating over the kinetic energy. At the present time we know the $V_{1,0}$ term dominates the potential and also the density parameter of the field today and thus,
\begin{equation}
    V_{1,0} \approx \frac{1}{20}\rho_c \approx 10^{-31},
\end{equation}
where we have used approximate values for the value of the potential and density parameter to gain an order of magnitude estimate. To constrain the second free parameter $V_{2,0}$ we can make the same calculation at an earlier time, for instant dark energy-matter equality has $\omega_\phi=\Omega_m \approx 0.5$, where the density parameter has another known value. The critical density of the universe changes with time and so the appropriate value must be used. From \citeref{weinberg_2015} we know at dark energy-matter equality $H_{eq} = 0.75H_0$ and therefore at equality the critical density is $0.75^2\rho_c$. Using these values then can calculate the value of $V_{2,0}$ based upon the value of the potential in the simulation which we find to be,
\begin{equation}
    V_{2,0} \approx \frac{0.75^2}{20}\rho_c \approx 10^{-31}.
\end{equation}
Approximate values have been used here as only the order of magnitude is important to illustrate the problem with this model. Since these numbers for the potential are small and the initial conditions needed for the model to have the correct behaviour also required precision, the scalar field model in general has a very high degree of fine tuning. It would be preferable in this model if the potential from the simulation had a value of the order $\rho_c$ naturally, rather than the free parameters having to be tuned to do so. This is not uncommon in dark energy models as even the cosmological constant has severe issues with fine tuning, as outlined in the discussion of the cosmological constant problem. Unfortunately, however we can now see that the scalar field model of dark energy also suffers similar problems and does not provide a solution.

A final remark on the value of the potential would be to comment on its correspondence to a particle. In QFT particles are excitation in a field, thus the scalar field we have be studying should correspond to a particle. It can be shown that the potential energy and the mass of the particle are closely linked,
\begin{equation}
    V''(\phi) \propto m_\phi^2,
\end{equation}
where $m_\phi$ is the mass of the particle. This is a low mass for a particle, and is well within the energy scales that large detectors are able to probe, and nothing has been detected \cite{COPELAND_2006}. Therefore we can conclude that it is unlikely that this scalar field specifically exists in nature.


\subsection{The Hubble tension}

To quote Weinberg on the cosmological constant problem \cite{Weinberg_1989},
\textit{"Physics thrives on crisis."}.
This seems to be quite evident throughout history and also presently in cosmology. The Hubble tension refers to a disagreement between two highly precise measurements of the Hubble parameter, both using entirely different sources of data \cite{Zhao_2017}. By calculating the Hubble parameter using a type Ia supernovae technique, the observed value for many of these surveys averages roughly $h = 0.73$, where $H_0 = 100h \si{kms^{-1} Mpc^{-1}}$. Techniques that use observations of the early universe by imaging the CMB, Planck for instance \cite{planck_2018}, observe a lower value of $h = 0.67$. Initially, when both techniques were less precise, this was not a problem as the errors in the measurements overlapped, however as the techniques have matured the errors have decreased and the disagreement is now significant. We have spoken about proponents to using type Ia supernovae as standard candles before \cite{Kang_2016,kang_2020}, but it is important to note this is not an issue with the experimental technique, as many other standard candles also make the same prediction that do not suffer the issues of luminosity evolution as suggested.

Recently, there has been research into an area known as early dark energy (EDE). This field studies the behaviour of dark energy and how it evolved at early times, and could possibly provide a resolution of the Hubble tension. \citeref{Gen_2020} suggests that short a period of dark energy at a redshift of $z=2000$ could alter the expansion of the universe enough to account for the disagreement in $h$, after which the the universe would settle back into the regular dynamics we expect. The significance of this is that EDE uses scalar field, like we have been discussing, to model dark energy. The work in \citeref{Gen_2020} uses a potential $V(\phi)$ that causes a period of anti de Sitter space in the early universe before recombination that would have effects on the CMB. It is possible to show that using this technique can increase the value of $h$ calculated from observations of the CMB to $h=0.72$ which would again be inline with what is observed by the alternative techniques, thus resolving the tension. 

In our model this would have the effect of a small bump in the density of dark energy that would rapidly fall off around the time of matter-radiation equality. If these dynamics are possible in the system presented in the previous chapters, either by modifying the potential or otherwise, then easing the Hubble tension could be a direct application.

\section{Domain Walls}
\subsection{Properties of domain walls}

Domain walls are a topological defect that occurs when a symmetry is broken. They appear in many areas of physics, most commonly in magnetism, however they are theorised to also appear on a cosmological scale when phase transitions take place in the early universe \cite{Rajantie_2003}. Consider a field in the early universe with a potential that has a 'U' shape. The field would evolve by oscillating around the minima of the potential and, depending on how the field couples to say matter or due to redshift, it would eventually lose energy and the oscillation would become damped. Now consider the behaviour of the system if a phase transition occurred throughout the universe which caused the potential to transition into a 'W' shape. The potential would then fall down into one of the two minima depending on where it was before the phase transition, of course we can ignore the unstable position at the center turning point of the potential. Since information can only travel at the speed of light, when these phase transitions occur it is possible that in two sufficiently distant regions of the universe, the field is at a different point in the potential and would therefore fall into a different minima than an other region. To travel across the boundary between two regions would require passing through the large wall at the center of the potential, it is this potential wall separating regions of space that is referred too as the domain wall. The process described here is the Kibble mechanism for the formation of domain walls \cite{Kibble_1976}. If this was to happen throughout the entire universe, it would form a large network of walls.

If we apply the same technique we used when analysing scalar fields and model the domain walls as a fluid, then the Friedman equations will apply and govern the effects they have on the expansion of the universe. However in this case we do not yet know the equation of state parameter of a domain wall fluid. It can be shown that the surface area of a single domain wall scales as $A_{d} \propto a^2$ where $a$ is the scale factor of expansion \cite{Vachaspati_1998}, which would imply that the density will scale at the rate,
\begin{equation}
\rho_{dw} \propto \frac{A}{a^3} \propto a^{-1}.   
\end{equation}
where $\rho_{d}$ is the density of the domain walls. Using equation \citeeqn{friedmann-dens-sol} we may write,
\begin{equation}
    \rho_{d} = \rho_{d,0} a^{-1} = \rho_{d,0} a^{-3\gamma_{d}},
\end{equation}
where $\gamma_{d}$ is the equation of state for the domain wall fluid and $\rho_{d,0}$ is the density of the domain walls today. This equation implies $\gamma_{d} = \sfrac{1}{3}$. This value is low enough to pass the acceleration threshold in \citeeqn{eqn-state-acceleration}, therefore if the domain walls were to dominate over the other fluids they would cause an accelerated expansion of the universe.


\subsection{Scalar fields in the presence of a domain wall}

Knowing the equation of state parameter for domain walls allows us to use it alongside the scalar field model. Since the fixed point analysis has been done for set of general fluids, we can easily model the matter-domain wall-scalar field system by using $\gamma_1=1$, $\gamma_2=\sfrac{1}{3}$. The fixed point analysis for this system has been included as \citetab{criticalpoints-2fluid_mod-domainwall}. There are several changes in this table when compared to the matter-radiation case, \citetab{criticalpoints-2fluid-mod-rad}. The most notable are due to the inequality $\gamma_2> \gamma_1$, which is not satisfied in this case. The effect of this change is that the matter scaling solution is always a saddle point in this system and the domain wall scaling solution can become stable.

We can use this model to make a measurement of an important value in the domain walls evolution. It is established in the literature that in the early universe domain walls cannot have a density parameter over a threshold value. If the domain walls exceed the threshold then the predicted values of the density parameter for the rest of the fluids in the universe, matter for instance, no longer reach the observed values today \cite{Rajantie_2003}. The value of the threshold is predicted to be $\Omega_d < 0.12$. If we use the domain wall scalar field model we have just established, then we can estimate this value via the use of simulation. We shall use the values of $\lambda_1=1$ and $\lambda_2 = 7$ that were used previously, as they have been shown to model the universe correctly, however in principle the presence of a domain wall could necessitate these values be changed to correctly model the universe. If we initialise the field in proximity to the matter scaling solution with a density parameter for the domain wall $\omega_d = 0.02$, adjusted by changing the $z$, then the system behaves as seen in \citefig{domainwall1}. The value of $\Omega_d$ is far below the threshold and the universe evolves as expected, transitioning from matter domination into a dark energy epoch. We can run a similar simulation, with the minor alteration $\Omega_d=0.2$ by increasing the values of $z$. The results of this second simulation can be seen in \citefig{domainwall2}. We are clearly beyond the threshold value in this case and the evolution of the universe is altered by the domain walls. In this case the domain walls briefly dominate, which would have the effect of an accelerated expansion, however it takes place earlier than in the case without the domain walls present, thus changing the evolution of the universe. 

Running multiple simulations whilst interpolating the value of $\Omega_d$, it was possible to calculate the point at which the domain walls first dominate. This was found to be $\Omega_d \approx 0.18$, slightly higher than the accepted value. The increase in this result could be attributed to the way the threshold was defined in the simulation, the evolution of the universe is likely to be effected by the domain wall even if it does not fully dominate but rather even if it comes close to dominating, which it does in this system before the measured threshold.

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/6_DomainWall/domainwall1.eps}
\caption{Density parameters as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{1}{3}$ and $\lambda_1=1$, $\lambda_2=7$, starting with initial conditions in the region of the matter scaling solution, with $\Omega_d=0.02$. We can see the domain wall does not dominate and and allows the system directly into dark energy epoch.}
\label{domainwall1}
\end{figure}

\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/6_DomainWall/domainwall2.eps}
\caption{Density parameters as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{1}{3}$ and $\lambda_1=1$, $\lambda_2=7$, starting with initial conditions in the region of the matter scaling solution, with $\Omega_d = 0.2$. In this case the domain walls start with a sufficiently large density parameter such that they dominate and change the evolution of the universe by providing an accelerated expansion too early.}
\label{domainwall2}
\end{figure}

The behaviour we observe in the simulations could due to the domain wall scaling solution being stable, if the field gets too close initially then the attractor will amplify the motion and cause it to increase and dominate. This is not the explanation for the threshold requirement theoretically and raises many questions regarding the theoretical side of the simulations. To fully test this idea and to gain a more accurate result, the scalar field model would need to be extended to include a third background fluid. This would allow for the presence of matter, radiation and domain wall, all alongside a scalar field, removing uncertainty in the effectiveness of the chosen $\lambda_1$ and $\lambda_2$. This was not conducted in this report and hence could form the basis for future research. 

\section{Conclusions}
In this report we have seen how the cosmological constant problem motivated alternative models of dark energy. We have successfully produced a model using scalar fields and exponential potentials that readily produces the behaviour required and the late time acceleration as observed. Does, then, our model solve the cosmological constant problem? Unfortunately not. There are several idealisations that we have made implicitly that would result in a vacuum energy contribution, just like a cosmological constant. These are quantum in origin and are associated with the fields decay, and if or how the field couple to others, matter say. This would cause quantum fluctuations, i.e pair creation, that would cause a non negligible contribution to the vacuum. This is on top of the undesirable high levels of fine tuning required the get the system into a state that resembles our own universe mean that the problems associated with the cosmological constant still remain. 


\citefig{conclusion} can be compared with \citefig{flrw} to see the core difference between the scalar field model and the cosmological constant. Scalar fields track the background fluids and then break away at later times to dominate. This dynamical ability gives the scalar field model a large amount of capability. This is quite apparent since we were able to produce complex behaviour from a very simple potential. Our model was even able to make prediction of the time of acceleration and naive approximation of the domain wall threshold value at early times. The domain wall discussion, however, concluded with the suggestion that the model could be extended even further. This, and the Hubble tension are interesting applications of the model and show that research into scalar fields has a positive future. The dynamical evolution of the field makes it an incredibly versatile tool that could have applications in many other areas of cosmology and while we were unable to produce the desired results without fine tuning, it certainly does not undermine the importance of having scalar fields in the cosmologist toolbox.  


\begin{figure}[ht]
\includegraphics[width=\linewidth]{2_Chapters/7_Conclusion/conclusion.eps}
\caption{Log of density parameters as a function of time $N$ for a system with $\gamma_1=1$, $\gamma_2=\sfrac{4}{3}$ and $\lambda_1=1$, $\lambda_2=7$, initial conditions are tuned to have accurate timings, the density values have not been adjusted, however, and are in arbitrary units. This figure can be contrasted with the illustration in \citefig{flrw}, to see that the model does produce the behaviour required.  First radiation dominates (dotted), then matter (dashed), and finally the scalar field (solid).}
\label{conclusion}
\end{figure}

\section*{Acknowledgements}
This report was written during the Covid-19 pandemic of 2020. I would like to thank my supervisor, Ed. Who would have been a phenomenal supervisor even under normal circumstances, but specifically for making sure that the situation had very little impact on the project and never lost contact during this uncertain time, Thank you. 

I would also like to thank my friends,
Sara,
Jack,
Will,
Ryan,
Kieran,
Dillon, and someone else who I'm probably forgetting, for keeping me company virtually. It's been difficult on my own and I couldn't have done it without you.