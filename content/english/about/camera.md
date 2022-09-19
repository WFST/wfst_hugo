---
title: "Camera📷"
date: 2022-09-06T14:40:06+08:00
draft: False
# description
description: "about: camera"
type: "post"
author: "WFST"
math: true
---

# Camera

*University of Science and Technology of China; Purple Mountain Observatory*

![img](/images/figs_Telescope_Camera/camera.png)

The focal plane can be divided into 3 sections: scientific imaging array, curvature wavefront sensors (CWFS) for AOS and CCDs for guiding system. The scientific imaging array consists of 9 9K×9K CCDs (E2V CCD290-99) with pixel size of 10$\mu$m. It is a mosaicking CCD detector with the flatness of 20$\mu$m. The entire scientific imaging array is inside the unvignetted region indicated with a circle of 325mm diameter as shown in Fig.4a. There is one CWFS located at each side of scientific imaging array as shown in Fig. 4a. Each CWFS consists of two CCD detectors (E2V CCD250-82) with 4K×4K pixels and a pixel size of 10$\mu$m. Two CCDs are de-focused $\pm$1mm respectively from the focal plane as shown in Fig.~\ref{fig_cam_fp}b. The curvature wavefront sensors have only about 1/4 of area inside the unvignetted circle. Because CCD 250-82 is full frame CCD, only half of it is operated to save the readout time. The guiding sensors are made of E2V CCD 47-20 with 1K×1K pixels and a pixel size of 13$\mu$m. They are located at two side of scientific detector and are almost completely outside of the unvignetted region as shown in Fig.~\ref{fig_cam_fp}a. The CCD 47-20 is a frame transfer CCD and can work without a shutter. Each CCD 47-20 has been re-packaged for mosaicking installation as shown in Fig.~\ref{fig_cam_fp}c. The surface of the guiding CCD detectors should be within 20$\mu$m from the focal plane.

The camera of WFST is at the prime focus of the telescope. Due to the limited space, The design of camera is very compact. It consists of a vacuum dewar for CCD detectors, a focal plane assembly including CCD detectors and mechanical parts, readout electronics, vacuum devices, a cryo-cooling system for CCD detectors, a hydrocooling system for heat dissipation of electronics and a data acquisition system, an imaging control system and a data storage system. The design of camera is shown in Figure~\ref{fig_cam_cam}. The C5 lens serves as the window of the camera dewar. The CCD detectors are installed on the focal plane base plate made of SiC which has a small thermal expansion coefficient under temperature variation. The CCD detectors will be cooling to -100$^{\circ}$C to reduce the dark current. The focal plane assembly is housing in a the vacuum dewar. There are two cryo-coolers each with two cryo-cooling heads. The ribbon wires of the CCDs are connected to the electronics through feed-though at the back flange of the vacuum dewar. The electronics include controllers of CCD290-99, CCD250-82, CCD47-20, the CCD temperature control system and the data acquisition system. The electronics is sealed in a thermally isolated box. A hydrocooling system is installed at the back of the electronics box and the heat will be dissipated through the hydrocooling system which will reduce the seeing influence tremendously from the heat produced by the electronics. 

![img](/images/figs_Telescope_Camera/fp.jpg)

An imaging control system named camera control system (CCS) is designed for device control, imaging control and interaction with other system functions, such as filter switching, shutter control, camera rotation, cryo-cooling, hydrocooling, and vacuum pumping. The CCS manges will collect all of the imaging data and status data of the camera and transmit them to the data storage center. 