---
title: "TDE"
date: 2022-09-06T15:11:51+08:00
draft: false
# description
description: "This is meta description"
math: true
---



One breakthrough in transient study of the past decade is the detection of a fast-growing number of tidal disruption events (TDEs). A TDE occurs when a star occasionally wanders into the tidal sphere of the supermassive black hole (SMBH) in a galaxy center. The star will be tidally disrupted and partially accreted, producing a flash of electromagnetic radiation on timescales of months to years \cite{Rees1988,Evans1989,Phinney1989}. The event rate is lower than supernova by a factor of hundreds, i.e., $10^{-4}-10^{-5}~\rm gal^{-1}~yr^{-1}$, making TDEs a class of rare transients.

Although being theoretically predicted in 1970s, TDEs were not discovered until late 1990s from the archival ROSAT data \cite{Bade1996} as well as a few more subsequent events from XMM-Newton and Chandra (see a recent review \cite{Saxton2020}), guided by the anticipated radiation peak in soft X-ray or extreme UV bands. However, those TDEs were all found serendipitously from archival data and have scarce synergetic information in other wavelength regimes (see recent progress from SRG/eROSITA survey \cite{Sazonov2021}). Thanks to a variety of wide-field optical surveys dedicated to time-domain surveys, the past decade has seen an explosive growth of TDEs (see recent review of \cite{vanVelzen2020,Gezari2021}). Particularly, the ZTF survey has raised the discovery rate of TDEs from $\lesssim$2/yr to $>$10/yr, opening up a new era of statistical studies \cite{vanVelzen2021}. Moreover, optical TDEs are discovered in real time now, enabling timely multiwavelength follow-ups. 

![tde](/images/figs_TDE/tdelcg.png)

In order to assess the prospect of TDE discovery ability quantitatively, we have performed mock observations by taking into consideration of site conditions, telescope parameters and survey strategy. We start from the billions of galaxies in the 440 deg$^2$ CosmoDC2 field \cite{2019ApJS..245...26K}, with assigned TDE event rate for a given galaxy by BH mass\cite{Stone2016}.  The TDE light curves are generated by the empirical model {\tt MOSFiT} \cite{2018ApJS..236....6G}. We assume a uniform survey strategy for the experimental 440 deg$^2$ field, which will be scanned with 30-second exposures every 10 days at $u,g,r,i,z$ band, respectively. The "observation windows" ($\sim180$ days in one year) and the clear night proportion, assuming 70\% defined as more than 4 hour of contiguous fully clear time \cite{2021Natur.596..353D}, have been also taken into account.  In addition to a seeing distribution consistent with on-site monitoring, we have simply applied a sky background of 22.0 mag/arcsec$^2$ and readout noise of $10\ e^-$/pixel. 

We define that the discovery of a TDE (see the $g$-band light curve of an example in Figure~\ref{tderesult}) requires at least: 
1) the host galaxy is detectable in the reference image in one band; 
2) the excess in the galactic nucleus should be significant in 10 epochs and 2 bands.
We have performed 1000 mock observations and found that the band combination of $g,r$ is most effective. If we choose the combination of $u,g,r,i$ bands conservatively, aiming to obtain more comprehensive SED information (particularly the $u$ band), it will yield $29\pm6$ TDEs in the CosmoDC2 field, equivalent to a detection rate of $532\pm100$ per year for the 8000-deg$^2$ wide-field survey. \cite{Lin2022}
% In comparison with known TDEs (e.g., found by ZTF), our mock sample can extend to much higher redshift ($z>0.5$, see the right panel of Figure~\ref{tderesult}).

WFST will not only contribute to the growing number of TDEs, but also substantially extend the redshift range to $z\sim0.8$, as suggested by our mock sample. After a planned 6-year survey, we expect to obtain a uniformly-selected sample of thousands of TDEs. Combining with the host galaxy properties learned from WFST stacked and CSST high-resolution images, the sample will allow us to probe the occupations of SMBHs among different types of galaxies, and constrain their mass functions in the local universe, which is vital for deciphering the formation and growth history of SMBHs.

![tde](/images/figs_TDE/Mg_z.png)