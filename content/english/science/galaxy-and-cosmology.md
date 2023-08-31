---
title: "Galaxy and Cosmology"
date: 2020-09-06T15:11:51+08:00
draft: false
bg_image: "images/fig_galaxy_cosmology/jwst_2018.png"
description: " "
math: true
---

## Galaxy Formation

The WFST shear catalog represents a significant advancement in the study of galaxy formation, providing crucial data on the positions, shapes, photometric redshifts, and calibrated biases of galaxies as functions of resolution and signal-to-noise ratio (SNR). When combined with existing spectroscopic datasets covering the northern sky, such as SDSS, as well as future datasets like LAMOST2, it promises to revolutionize weak gravitational lensing studies. In particular, it holds the potential to greatly enhance our understanding of galaxy formation and cosmology. We will delve into three key aspects related to weak lensing analysis: the galaxy-halo connection, halo assembly, and cluster detection. Additionally, the deep u-band imaging capabilities of WFST enable the detection of a substantial sample of u-band dropout galaxies and low surface brightness galaxies.

### Galaxy-halo Connection

Galaxies come into existence and evolve within dark matter halos, and their evolution is intricately intertwined with the large-scale cosmic environment. Investigating the intricate relationship between galaxies, their host dark matter halos, and the broader cosmic structures represents a fundamental pursuit in our quest to unravel the intricacies of galaxy formation. A wealth of research efforts in the literature have explored the galaxy-halo connection through various observational techniques, including galaxy clustering and galaxy-galaxy lensing [258, 259], often combining these approaches. However, numerous questions in this field have remained unanswered.

The WFST shape catalog is set to make a substantial impact, thanks to its imaging depths, which are 7 times deeper for the WFS and 20 times deeper for the DHS compared to SDSS. Additionally, its multi-band photometry capabilities far exceed those of SDSS. This will result in a threefold increase in the signal-to-noise ratio for weak lensing analyses around galaxies, ultimately doubling the accuracy of halo mass estimation. Fig. 1 visually illustrates the significantly improved measurement precision achievable with WFST (depicted by red dots) in comparison to the SDSS galaxy-galaxy lensing measurements (depicted by green dots). Within the virial radius of halos, the WFST shape catalog alone is expected to reduce measurement uncertainties by a factor of 2.5.

<figure>
<div align=center>
  <img src="/images/fig_galaxy_cosmology/science-1.png" width="250" title="Figure 1" />
    <figcaption>
      <h5>Figure 1, The comparison of the galaxy-galaxy lensing signals between SDSS shape catalog and WFST shape catalog. The lower panel is the ration between the two errors. The error shrinks by a factor of 2.5 given the same lens sample but different catalog.</h5>
  </figcaption>
  </div>
</figure>

### Halo assembly effects

The detection of assembly bias has been a subject of extensive observational research. For instance, Miyatake et al. claimed the detection of assembly bias based on their analysis of RedMaPPer clusters using weak gravitational lensing and projected clustering techniques. However, this result has been contested by Zu et al., who argued that it may be an artifact arising from projection effects among the RedMaPPer cluster members. In fact, Zu et al. suggested that the secondary bias might be even more pronounced than what the Lambda Cold Dark Matter (LCDM) model predicts. They further theorized that a sample size ten times larger, coupled with deep imaging, would substantiate the detection of assembly bias. Here, WFST comes into play, significantly increasing the cluster sample size to approximately 40,200 clusters. This constitutes a 4.6-fold expansion in comparison to the sample size analyzed by Miyatake et al. (2016), covering a similar richness range but encompassing a broader redshift range (0.1 < z < 0.8). The combination of the WFST cluster sample with that of LSST is anticipated to reduce the uncertainty to less than 10%, a level comparable to the predicted LCDM assembly bias.

Furthermore, WFST is expected to play a pivotal role in the first observational attempt to determine the splashback radius. This endeavor will hinge on measuring the surface number density of galaxies and subsequently detecting galaxy overdensities around SZ (Sunyaev-Zel'dovich) clusters, in addition to employing weak gravitational lensing techniques. The high-quality imaging and photometry data from the WFST's WFS and DHS fields will be invaluable for addressing all of the aforementioned research topics. Notably, the shape catalog will enable the measurement of the halo mass of spectroscopically selected galaxy groups, providing an opportunity to compare these results with other halo mass estimation methods and significantly enhancing the precision of measuring both the splashback radius and the assembly bias.

### U-band Drop-out Galaxies at z ∼ 2–3

Lyman Break Galaxies (LBGs) represent starburst galaxies at high redshifts and can be effectively identified through a technique that combines u, g, and r bands. WFST is well-equipped to provide comprehensive broad-band imaging for this purpose, covering extensive survey regions. We have conducted an estimation of the number of LBGs that can be identified using both the DHS fields (approximately 1000 square degrees) and WFS fields (6800 square degrees).

In the DHS region, the WFST is expected to detect approximately 107 galaxies. These galaxies will be detectable down to a g-band absolute magnitude of -20.6 at redshift z = 3, taking into account a 90% completeness for r < 25.5. Although this number is significantly smaller than what the LSST survey can provide, this catalog of galaxies will serve as a valuable resource for guiding future follow-up spectroscopic surveys. Moreover, LBGs at higher redshifts (z > 4) can also be selected based on g, r, i color criteria, similar to what has already been accomplished, thereby contributing to the creation of another valuable legacy catalog.

### Low Surface Brightness Science


The low surface brightness (LSB) regime is poised to usher in a transformation in our comprehension of galaxy formation and evolution during the coming decade. WFST's prime focus architecture is adept at minimizing contamination from scattered light, making it particularly well-suited for LSB science. Through six years of co-added imaging data (approximately 50 minutes of exposure time), WFST is expected to achieve a r-band 3–σ surface brightness limit of approximately 28.7 mag arcsec−2 by averaging over a 10×10 arcsec^2 area. This depth slightly surpasses the capabilities of the 275 deg^2 Stripe 82 field in SDSS.

Based on extensive completeness simulations, we anticipate that WFST will be able to detect ordinary satellite dwarf galaxies down to an average surface brightness of approximately 25.7 mag arcsec−2 within their effective radius, reaching a 50% completeness limit. This surface brightness limit corresponds to a stellar mass detection threshold of roughly 106.1±0.5 solar masses out to a distance of about 60 Mpc. Moreover, with a surface brightness limit of 28.7 mag arcsec−2, WFST will be capable of identifying tidal features resulting from galaxy merger events that transpired at least ∼ 3-4 billion years ago.

Additionally, WFST's wide-field and consistent datasets will enable a robust stacking analysis of surface brightness profiles extending well beyond 30 mag arcsec−2 for galaxies of diverse morphological types, masses, and environments. This approach will provide stringent constraints on the formation of galaxy stellar halos in a general context. Furthermore, WFST distinguishes itself from existing optical imaging surveys, such as DES and HSC-SSP (Hyper Suprime-Cam Subaru Strategic Program), by including deep u-band data, which are indispensable for probing the stellar population properties of galaxies through broad-band photometry.

## Cosmology
### Cluster detection and cosmology


Clusters of galaxies serve as invaluable probes for cosmology and galaxy formation. The Bullet cluster, a renowned example, stands as compelling evidence for the existence of dark matter. In this cluster, the spatial distribution of X-ray-emitting hot gas significantly deviates from that of dark matter, which has been inferred through weak lensing. Furthermore, the presence of a shock feature in the X-ray data challenges standard cosmological models, as it implies an exceedingly high collision speed for the two merging clusters, a scenario that is difficult to reproduce in numerical simulations.

Abell 520, another cluster studied extensively using weak-lensing techniques, presents a different enigma. It appears to challenge the conventional galaxy formation paradigm, as there are significantly fewer galaxies observed in the "dark core" of the cluster than theoretical predictions suggest.

Another intriguing discovery involves the Coma cluster, a massive cluster found to be rotating at a velocity of 197 km s−1. This revelation raises questions about the dynamics of such clusters.

In essence, there are several unresolved mysteries surrounding galaxy clusters that await exploration in the future WFST survey region. WFST will compile a photometrically selected cluster sample using the RedMaPPer algorithm, comprising over 40,000 clusters with richness greater than 20 and located within the redshift range of 0.1 < z < 0.8. The primary scientific objectives encompass conducting cluster mass estimations to constrain cosmological parameters and cross-referencing these clusters with other observations, such as SZ (Sunyaev-Zel'dovich) clusters, X-ray clusters, and weak lensing mass maps. The resulting cluster catalog, in conjunction with the weak lensing shape catalog, will be of considerable significance for advancing cosmological studies and will serve as a foundational dataset for forthcoming surveys.

### 3 × 2-point correlation functions

The digit 3 in the title of this section denotes three types of 2-point correlations employed in the statistical analysis, i.e. galaxy clustering, cosmic shear and galaxy-galaxy lensing measurements. By conducting the WFST surveys with a depth similar to that of DES (Dark Energy Survey) and covering an effective weak lensing area in the northern sky, it is anticipated that the error will be reduced by a factor of 1.3. Furthermore, the WFST's WFS and DHS fields overlap with BOSS/HSCSSP, which includes a spectroscopic sample with publicly accessible data. This overlap facilitates the joint analysis of clustering and galaxy-galaxy lensing measurements with LowZ and 2MASS samples. Such a combination is expected to significantly increase the signal-to-noise ratio by a factor of 3.3 for the WFS and 3.0 for the DHS, in comparison to the CFHTLenS analysis and the HSC S16A shape catalog.
### Joint Analysis with Other Observations

In addition to weak gravitational lensing, various cosmological probes have been utilized, including the cosmic microwave background (CMB) radiation, baryon acoustic oscillations (BAO), and Type Ia supernovae (SNe Ia). Employing a joint analysis and comparison of different probes represents a potent approach. Particularly noteworthy is the comparison of probes that exhibit distinct degeneracy directions for the same set of parameters, as this can break the degeneracy between these parameters.

For instance, Di Valentino et al. conducted a combined analysis of BAO, CMB, Weak Lensing, and SNe Ia data, expanding the constraints from the basic 6-parameter ΛCDM model to include additional parameters such as the sum of neutrino masses, the effective number of neutrino species, the dark energy equation of state, and more. The inclusion of WFST will enhance joint analyses involving SNe Ia, weak lensing, clusters, time delay, and CMB observations in the northern sky. Additionally, the spectroscopic catalog from the eBOSS and DESI surveys will complement the WFST imaging data in relevant cosmological investigations.

### Non-standard Cosmology

The tensions observed between early and late cosmological probes have prompted the exploration of new physics, reminiscent of the "two dark clouds" era in the early 20th century. There is a possibility that interactions between dark matter and dark energy could explain the lower σ8 value derived from weak lensing constraints. Moreover, these tensions may lead to the discovery of alternatives to dark matter and dark energy, shedding light on the true nature of these enigmatic components of the universe.

The identity and properties of dark matter remain open questions in cosmology. Weak gravitational lensing, including cosmic shear, presents a powerful tool to probe the dark side of the universe and test non-standard cosmological theories. By harnessing the vast number of source galaxies in the WFST WFS and DHS fields, with source densities 7 and 22 times greater than those in areas similar to the SDSS survey, it's possible to construct a wide and deep shape catalog. This catalog has the potential to improve current constraints by factors of 2.12 and 1.88 in the WFS and DHS fields, respectively, providing valuable insights into dark matter, dark energy, and the validity of general relativity at galactic scales.