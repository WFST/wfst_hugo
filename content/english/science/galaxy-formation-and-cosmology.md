---
title: "Galaxy and Cosmology"
date: 2022-09-06T15:11:51+08:00
draft: true
# description
description: "This is meta description"
math: true
---


# Galaxy Formation


The WFST shear catalog is one of the products of galaxy formation study with position, galaxy shape, photometric redshift and calibrated biases as a function of resolution and SNR. Combining with the existing spectroscopic data set in the northern sky, e.g. SDSS \cite{abazajian2009} and future ones such as MUST \cite{} and LAMOST2 \cite{}, it will significantly benefit the study of weak gravitational lensing. Especially the constraint on galaxy formation and cosmology will be improved. We will address the science in three aspects related to weak lensing analysis, i.e. galaxy-halo connection, halo assembly and cluster detection. There are two other important scientific subjects also can be done using WFST imaging data. With the deep u band imaging, it is possible to also detect a large sample of $u$ band drop out galaxy and low surface brightness galaxies.\\


## Galaxy-halo Connection


Galaxies are believed to form and evolve within dark matter halos and affected by the large scale environment. Therefore exploring the connection of galaxies with their host dark matter halos and large scale environment becomes an essential step towards the understanding of the full picture of galaxy formation. There has already been many studies in literature on the galaxy-halo connections, based on various observational measurements, such as galaxy clustering \cite{Jing1998ApJ, Peacock2000MNRAS, Krumpe2010ApJ,Shirasaki2018PASJ}, or galaxy-galaxy lensing \cite{Mandelbaum2006MNRAS, Leauthaud2010ApJ, luo_gg1, luo_gg2}, or combining both observations \cite{Zu2015MNRAS, zhang2021A&A}.
However, many questions still remain\cite{Wechsler2018ARA&A} unclear. One of the questions is whether the host halo mass depends on the galaxy properties. If so, which galaxy properties are dominant, and how are these correlations produced? 
How do different environmental processes, indicated by various environmental factors, affect the galaxy properties? A recent study of Zhang et al 2022 \cite{Zhang2021arXiv211204777Z} find a massive star-forming galaxy sample that about 67\% of the gas has been converted to stars, which is abnormally high compared the average of 20-30\% converting rate. What mechanism causes this specific mass bin bearing such high gas consumption rate?

It is also particularly interesting to investigate whether the host halos of AGNs, which identified with strong central super massive black hole activities. AGNs are different from other galaxies based on the SED features, further among the AGNs there are different types of them indicating different physical process of some emission lines. Whether different types of AGNs reside in different large-scale environments still remain an open question. Zhang et al 2021 \cite{zhang2021A&A} find that the halo mass of AGNs are similar to the star-forming galaxies, but lower than the quenched control sample. However, the satellite number around AGNs are more than star-forming galaxies, indicating the AGN trigger mechanism may associate with satellite galaxies.


WFST shape catalog, with deeper imaging than SDSS and multi-band photometry information. The SNR of Weak lensing analysis around galaxies will improve by a factor of 3. This leads to an improvement of factor of 2  accuracy on halo mass estimation. Fig.~\ref{fig:wfst_sims_3} shows the error improvement from SDSS galaxy-galaxy lensing measurement (green dots) and WFST measurement (red dots), while the lower panel is the ratio of errors between the two given the same lens sample. WFST shape catalog alone shrinks the error bar by a factor of 2.5 at all scales. It also allows us to explore a larger parameter space.\\

## Halo Assembly effects
It is well known that the clustering of dark matter halos
strongly depends on halo mass \cite{Mo1996MNRAS}. Numerical simulations revealed that, at given halo mass, the halo clustering also depends on other halo properties, such as
halo formation histories, internal substructures and spin \cite{Jing2007ApJ, GaoWhite2007MNRAS}. This higher order effect is usually referred to halo assembly bias.


From observations, there are many efforts as well to detect the assembly bias. For instance,  Miyatake et al 2016\cite{miyatake2016PhRvL} claim the detection of assembly bias based on RedMaPPer \cite{Rykoff2016ApJS} clusters applying weak gravitational lensing and projected clustering analysis. However, Zu et al 2017 \cite{zu2017MNRAS} counter-claim that the previous detection is due to the projection effect for RedMaPPer cluster members and therefor the higher order bias is even higher than the LCDM prediction. They also further predict that a 10-fold more number of clusters with deeper imaging can improve the detection. WFST will roughly increase the number up to about 40, 200 which is 4.6 times larger than the sample in Miyatake et al 2016, with the same richness range but larger redshift range ($0.1<z<0.8$). Combining LSST cluster sample, it can pin down the error below 10\% which is about the level of predicted LCDM assembly bias. A recent interesting effort split 630 massive clusters into early- and late- formed clusters using ELUCID simulation \cite{wang2014ApJ}, they claim that a 4$\sigma$ difference on the clustering have been detected, implying a detection of assembly bias

Clusters are not the only subject to analyse the assembly bias. Lin et al 2016 \cite{Lin2016ApJ} selects low mass samples divided into early and late formed galaxies to detect this effect. They attribute the null detection to the noisy measurements. McCarhty et al 2022 \cite{McCarthy2022MNRAS} extends the previous work by adding more galaxy sample and changing the clustering estimator to redshift space distortion (RSD), which is basically the Legendre expansion of the clustering, but containing velocity information. They find a large amplitude of velocity bias for early-forming central galaxies which may be originated from assembly bias. Yet the SNR of the measurement is again too noisy to confirm this claim. More lens sample and deeper imaging are needed for a significant detection. 

With such a shape catalog sample, e.g. \cite{luo_gg1}, we can measure the halo mass of spectroscopic selected groups of galaxies \cite{luo_gg2} and compare with other halo mass estimation methods. Galaxies with different properties, sSFR or SFR that experience different assembly history may have same halo mass, but different large scale clustering, a.k.a, assembly bias \cite{kevin2022MNRAS}. Zhang et al 2021 \cite{zhang2021A&A} studies the halo mass of galaxies classified as AGNs, star forming galaxies and quenched galaxies and find that the halo mass of AGN and star-forming galaxies are significantly smaller than their quenched counterpart with identical redshift and halo mass distribution. WFST data can greatly boost the understanding of assembly bias together and therefor offer another test of LCDM cosmology with LSST from the south.

*** add sblash back radius later.

## $U$-band Drop-out Galaxies at $z \sim $ 2--3

The Lyman Break Galaxies (LBGs) are star-burst galaxies at high redshift (see. a review of Giavalisco et al 2002 \cite{Giavalisco2002ARA&A}), which can be selected using this technique combining $u$, $g$ and $r$ bands as in a recent work combining CLAUDS and HSC-SSP deep data Sawicki et al 2019 and Thibaud et al 2020\cite{sawicki2019MNRAS, Thibaud2020MNRAS}. There are many studies in literature on the UV luminosity function (UV-LF) of LBGs that can be used to estimate the energy budget at high redshift and galaxy evolution. Since Steidel et al 1995 \cite{Steidel1995AJ}, there are Reddy et al 2009 \cite{Reddy2009ApJ} and Cai et al 2014 \cite{Cai2014ApJ} e.t.c that studies the UV-LF of LBGs.

The selection criteria is shown in EQ. 4 of Sawicki et al 2019 their, i.e. $u-g>0.88$, $g-r<1.2$ and $u-g> 1.88(g-r)+0.68$. The WFST broad band can provide all those information with deep and wide survey regions as mentioned in Sec.~\ref{section_2}. Here, we roughly estimates the number of LBGs from both deep (1200 Sq. deg. with $g$ band 26.4 in magnitude, -20.6 in absolute magnitude and $r$ band 25.9) and wide (6800 Sq. deg. $g$ band depth 25.1 in magnitude, -21.9 in absolute magnitude assuming z=3 and $r$ band 24.7) survey region by applying the LF at z=3 in Cai et al 2014 using $M_{1350}$ monochromatic mag as an indicator. We can obtain 10$^7$ galaxies  (with $g$ absolute magnitude to -20.6 considering \%90 completeness with $r<25.5$) for deep region only, two orders lower than 10$^9$ from LSST survey. This catalog can be a legacy catalog for future spectroscopic surveys.

LBGs at higher redshift, i.e. $z>4.0$ using $gri$ color criteria can be also selected as has been done in Steidel et al 1999 \cite{Steidel1999ApJ}. All those selections are valuable legacy catalog of WFST imaging data.


# Cosmology

As tensions among cosmological parameters emerge, e.g. $H_0$ and $S_8=\sigma_8(\frac{\Omega_m}{0.3})^{0.5}$ recently between CMB probe and SNIa \cite{Riess2021arXiv211204510R}, time-delay \cite{wong2020MNRAS}, weak lensing analysis \cite{Troxel2018PhRvD}.
Debates arises if this is due to some hidden systematics \cite{Troxel2018MNRAS,tdcosmo42020A&A,efstathiou2021MNRAS} or some new physics that we need more data to confirm. 

WFST data will produce a large sample of SNIa (see Sec.~\ref{section_315}), strong lensing AGN/SNIa (see Sec.~\ref{section_315}, ~\ref{section_34}) systems as well as cluster catalog and shape catalog, which will boost the cosmology study in the
northern sky. We will focusing on the Standard cosmology constraints and cosmologies that deviates from LCDM. 

On the standard cosmology study, we proceed with the analysis of cluster mass function, cosmic shear and the combination with other measurements, e.g. clustering, cluster mass functions, time-delay and so on. For non standard cosmology, we focus on the constraints of modified gravity models, dark matter particle models e.t.c

## Cluster detection and cosmology

Clusters of galaxies, also provides information of cosmology and galaxy formation. The famous Bullet cluster alone \cite{Clowe2004} is a smoking gun evidence of the dark matter, where the X-ray hot gas significantly deviates from the distribution of the weak lensing inferred dark matter. Beside, the X-ray shock feature is a challenge to the standard cosmology in the sense that the collision speed of the two merging giants is too low to be found in the simulations. Abell 520, another intensively studied cluster using weak lensing technique, provoke another challenge to classic galaxy formation paradigm that way fewer galaxies than theoretical prediction in the "dark core" of the cluster \cite{abell5202007ApJ}.  A recent finding of a massive rotating cluster \cite{tang2021ApJ}, which is actually coma cluster, with rotation velocity of 197 km/s. There have already been many mysteries for clusters to probe in the future WFST survey region.\\

The selection of a reliable cluster is not an easy task, especially the data without spectroscopic information. However, there are still endeavors to select cluster using photometric information only, e.g. RedMaPPer\cite{Rykoff2016ApJS}, CAMIRA\cite{oguri2018PASJ} which applies the red ridge galaxies. Yang et al 2021 method \cite{yang2021ApJ} is a novel halo-based cluster selection method modified based on Yang et al 2007 \cite{yang2007} to adjust the pipeline for the photometric data. However, those methods suffers from the projection effect due to the accuracy of photometric redshift and therefore the membership estimation is biased as described in Zu et al 2017 \cite{zu2017MNRAS}, and Sunayama et al 2020 \cite{sunayama2020MNRAS}. Along with extended X-ray sources, Sunyaev-Zel'dovich effect \cite{planck2018} can also be used to detect clusters. More recently, people use shear map to select clusters, e.g. HSC-SSP shear map clusters \cite{Oguri2021PASJ}. \\

Combining cluster catalog with different selection methods, and the galaxy-galaxy lensing, tight constraints on observable halo mass scaling relations can be achieved. Fig.~\ref{fig:wfst_sims_4} shows the $\kappa$ (colored map) and shear map (white ticks) of a cluster selected from ILLUSTRIS TNG simulation \cite{nelson2018}.%the middle panel is one dimensional galaxy-galaxy lensing profile and the halo mass, concentration constraints are shown in the right panel.

As mentioned in the previous section of assembly bias detection, WFST will generate a photometric selected cluster sample based on the RedMaPPer algorithm. The sample will contain more than 40,000 clusters with richness beyond 20 between $0.1<z<0.8$. The scientific goals are including cluster mass estimation and further mass function to constrain cosmology, cross-match the cluster with other observation e.g. SZ cluster \cite{PlanckSZcluster2016A&A}, X-ray cluster \cite{eROSITAcluster2021arXiv211009544B} and weak lensing mass map.
The cluster catalog together with the weak lensing shape catalog are valuable data for cosmology study and reference data for future surveys.

Once we have cluster catalogs from various observations as described in Sec~\ref{section_623}, we can constrain cosmology using cluster abundance and its evolution to constrain the fluctuation amplitude $\sigma_8$, the $\Omega_m$ parameter. The baryon fraction in clusters can be used to estimate the ratio of cosmic baryonic fraction $\frac{\Omega_b}{\Omega_m}$. The core structure of clusters can be a test of the nature of dark matter. 

Apart from all the virtues of these cluster statistics, each of them has its own limitations, i.e. the systematics in converting cluster observables (X-ray luminosity, S-Z Compton parameter, richness and weak lensing) to mass can bias the scaling relation in mass estimation. The baryonic effect degenerate with dark matter property in the core structure analysis. Therefore, how to build a reliable cluster catalog become the first step for cluster cosmology.

## Cosmic Shear Measurements and Cosmology Constraint

### 3$\times$2-point correlation functions
The 3 in the tile of this section denotes three types of 2-point correlations that are used in the statistics, i.e. galaxy clustering, cosmic shear, galaxy-galaxy lensing measurements.
Cosmic shear alone is sensitive to the dark matter density perturbation $\sigma_8$ and the fraction dark matter in out universe $\Omega_m$, e.g. \cite{hikage2019}. However, the intrinsic alignments can bias the results \cite{Okumura2009ApJ}. The alignment of galaxies itself is an interesting subject \cite{Okumura&Jing2009ApJ} which studies the misalignment between the galaxies and their dark matter halos assuming a triaxial halo shape \cite{Jing2000ApJ}.

Recent weak lensing surveys, e.g. KiDS\cite{KiDS}, HSC-SSP\cite{hsclw2021arXiv}, DESc\cite{DES2018ApJS} and joint analysis combined with all three surveys \cite{Amon2022arXiv220207440A} have roughly about 2$\sigma$ tension with CMB experiments \cite{planck2018}. WFST data set, will shrink the error by a factor of 1.26 assuming an effective weak lensing area of deep square degree from the northern sky with similar depth of DES. 

### Clustering and Galaxy-galaxy Lensing

Apart from the constraints of simply halo mass of galaxies, cosmological constraints can be also obtained by combining clustering analysis. Leauthaud et al 2017 \cite{leauthaud2017} find the weak lensing predicted $\sigma_8$ is lower than the one fits galaxy correlation well, a.k.a lensing is low? Afterwards, the combination of galaxy-galaxy lensing and clustering analysis become a standard routine to maximize the utility of different estimators, e.g. a very recent work combining galaxy-galaxy lensing and clustering using HSC-SSP data \cite{sugiyama2021, miyatake2021arXiv}. It shows that galaxy-galaxy lensing at small scale can constrain halo mass of galaxies, and at larger scale beyond 2 to 3 Mpc/h can be used to infer cosmology parameters. 

What worth mentioning is that a recent work by Shi et al 2018 \cite{shi2018ApJ} combine the redshift space distortion (RSD) from SDSS DR7 spectroscopic data and galaxy-galaxy lensing provides tight constraint on growth factor at redshift 0.1.

WFST wide/deep field survey areas overlap with eBOSS \cite{eBOSS2020ApJS..249....3A} that contains public spectroscopic sample that can proceed with the clustering and galaxy-galaxy lensing join analysis with LowZ and 2MASS sample. This combination will be a factor of 3.3 (wide)/3.0 (deep) in SNR compared to CFHTLenS analysis \cite{Leauthaud2017MNRAS} and HSC S16A shape catalog \cite{miyatake2021arXiv}. 

### Joint Analysis with Other Observations

Besides weak gravitational lensing, there are already many existing cosmological probes, such as the cosmic microwave background (CMB) \cite{planck2016} radiation, baryon acoustic oscillations (BAO) \cite{Eisenstein2005}, and type Ia supernovae (SN Ia) \cite{Riess2021arXiv211204510R}. The joint analysis and comparison among different probes. Especially the probes that bear different degeneracy direction for the same set of parameters, the join likelihood analysis can break the degeneracy between the parameters, e.g. Di Valentino et al 2015 \cite{DiValentino2015PhRvD} extend the constraint of 6 LCDM parameters to 12 parameters including the sum of neutrino mass, the sum of neutrino species effective number and the dark energy equation of state e.t.c by combining BAO, CMB, Weak Lensing and SNIa.


The joint analysis in the northern sky will be improved by WFST SNIa, Weak Lensing, clusters, time-dely and CMB. Especially, the spectroscopic catalog from eBOSS and DESI survey, will become a nature ally of WFST imaging data for the joint analysis.


### Non-standard Cosmology

The tensions between the early probe and late probes lead people to think what if there is new physics just like the "two dark clouds" in the early 20th century. Maybe, there are certain interactions between the dark matter and dark energy \cite{jiajun2018PhRvD}, which can explain the low $\sigma_8$ value from weak lensing constraint? Or can we find an substitute for dark matter \cite{verlinde2016} or dark energy \cite{kobayashi2019RPPh}? What is exactly dark matter and can it be tested by cosmological probes like cosmic shear \cite{DES_fuzzy2021arXiv211101199D}? Does GR still holds at galactic scale \cite{chen2020PhRvD}? 

Weak gravitational lensing can provide strong constraints on the dark side of our universe and therefore on non-standard cosmology. For instance, a recent work from Luo et al 2021 \cite{luo2021ApJ} finds that the Emergent Gravity \cite{verlinde2016} can hardly explain the difference weak lensing signals between the blue/red galaxy sample with similar stellar mass. Zhang, An and Luo et al 2019 \cite{jiajun2019ApJ} ruled out one of the interacting dark matter/energy model using weak gravitational lensing analysis from SDSS DR7 shear catalog. 

WFST wide/deep region will contain 7/22 times larger source galaxies per arc-minute square with similar survey area. This wide/deep shape catalog will improve the constraint by a factor 2.12/1.88 for wide/deep respectively.
