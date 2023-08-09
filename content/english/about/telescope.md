---
title: "Telescope"
date: 2022-09-06T14:40:06+08:00
#description: "about: telescope"
---




<figure>
<div align=center>
  <img src="/images/telescope-1.png" width="250" title="Figure 1" />
    <figcaption>
      <h5>Figure 1, 3D model of the telescope structure.</h5>
  </figcaption>
  </div>
</figure>


The Wide Field Survey Telescope (WFST) is a 2.5m optical telescope with primary-focus optics designed for a wide 3$^{\circ}$ field of view. A 3-D sketch of the telescope structure is shown in Figure 1, where telescope tube consists of a square center hub, the lower and upper Serrurier trusses, the primary focus ring, four spider plates, and the primary-focus assembling tube. The lower and upper Serrurier trusses are connected with the lower and upper surfaces of the central hub, respectively. The primary focus ring sits on the top of the upper Serrurier truss and provides support for the primary-focus assembling tube through the triangle spider plates.

A mosaic CCD camera, a set of corrector lenses, a filter exchanging mechanism and a field de-rotation and re-focusing mechanism are integrated into a unit known as a primary-focus assembly (PFA). The PFA is attached to the primary-focus assembling tube via a hexapod mechanism that leads to fine alignment of the PFA relative to the primary mirror.

The primary mirror is located at the other end of the telescope tube, which is assembled on an alt-azimuth mount. Ball-bearings are utilized on both the elevation and azimuth axes, and the rotation is driven by direct drive torque motors for high stiffness and precision. An auto-guiding system based on focal-plane guide sensors is employed to conduct closed-loop tracking during operation. The top-level telescope specifications are listed in Table 1.


<figure>
<div align=center>
  <img src="/images/telescope-2.png" width="500" title="Table 1" />
    <figcaption>
      <h5>Table 1, Top-level specifications for WFST.</h5>
  </figcaption>
  </div>
</figure>


Based on the system design specifications, relevant available data, and adopting a V-band sky background level of 22.0 mag arcsec$^{\-2}$, the limiting magnitude of WFST is presented in Table 2.


<figure>
<div align=center>
  <img src="/images/telescope-5.png" width="500" title="Table 2" />
    <figcaption>
      <h5>Table 2: Site Sky Brightness and Limiting Magnitudes for 30s exposures and stacked 50 min exposures assuming airmass=1.2.</h5>
  </figcaption>
  </div>
</figure>


The optical layout of WFST is shown in Figure 2. The optical system consists of a primary mirror, five corrector lenses, an atmospheric dispersion compensator (ADC), and the filters of six optical bands (u,g,r,i,z and w). The primary mirror (M1) is a thin meniscus made of Zerodur with a diameter of 2.5m and a thickness of 120 mm. It is an F/2 hyperbolic concave mirror with high-order aspheric terms. The first corrector lens, 970mm in diameter, is the largest one. The second corrector lens is a negative lens with a concave aspheric back surface. The third and fourth lenses are both spherical. To control the chromatic aberration, the third lens is made of Schott’s N-BK7 glass. The fifth lens also serves as the window for the detector dewar. The concave front surface of this lens is another aspheric surface. The final focal plane is a flat surface with a platescale of 0.03 mm/arcsec. To balance image quality and system transmission (especially in u-band), a lensm ADC design is adopted. 


<figure>
<div align=center>
  <img src="/images/telescope-3.png" width="900" title="Figure 2" />
    <figcaption>
      <h5>Figure 2: Optical layout of WFST.</h5>
  </figcaption>
  </div>
</figure>


The primary mirror is supported by 54 axial supports and 12 lateral supports. Under the gravitational load, these supports coordinate to deliver an r.m.s. surface error of 3.7 nm for a zenith pointing and 4.2 nm for a horizontal pointing. Both axial and lateral supports are given by pneumatic actuators based on diaphragm cylinders. Their output forces are measured by a load cell, which acts as the feedback into a precision control loop. Similarly, four additional lateral positioners adjust and fix the mirror position in the lateral directions. 

The configuration of the focal plane camera is shown in Fig. 3. The camera is comprised of the mosaic CCD chips, a rolling shutter, filters and filter switch mechanism, and an image rotator. 

<figure>
<div align=center>
  <img src="/images/telescope-12.png" width="500" title="Figure 3" />
    <figcaption>
      <h5>Figure 3: Schematic view of the focal-plane camera.</h5>
  </figcaption>
  </div>
</figure>


A total of 9 pieces of 10KX 10K CCD chips with 9 μm×9 μm pixels fills the 300 mmx300 mm focal plane, as shown in Fig. 4. Three additional 4KX2K chips are used for wavefront sensors and one additional chip is used as guiding sensors. 

<figure>
<div align=center>
  <img src="/images/telescope-6.png" width="150" title="Figure 4" />
    <figcaption>
      <h5>Figure 4: The WFST camera provides a 0.765 Gigapixel flat focal plane array, tiled by 9 pieces of 9K × 9K CCD science sensors with 10 μm pixels (white borders). Eight additional 4K × 4K chips are used for curvature wavefront sensors (orange borders), and four additional chips are used as guiding sensors (green).</h5>
  </figcaption>
  </div>
</figure>


The CCD chips, the RAFT structures, and the readout electronics are housed in a cryogenic dewar which provides the required working temperature of -100°C for the CCDs. The barrier window for the dewar also functions as a field lens. An image rotator provide rotation mechanism for the dewar and shutter with respect to the outer frame of the camera. The shutter for the camera is a 400mm × 400mm rolling shutter. This type of shutter has the advantage of compact size, small blockage and uniform illumination. The vacuum cryogenic dewar is shown in Fig. 5.


<figure>
<div align=center>
  <img src="/images/telescope-7.png" width="50" title="Figure 5" />
    <figcaption>
      <h5>Figure 5: A vacuum cryogenic dewar that houses the CCD chips, the RAFT structures, and the readout electronics. It provides the required working temperature of −100◦C for the CCDs.</h5>
  </figcaption>
  </div>
</figure>


The six filters are approximately 400mm in diameter. To avoid any additional obscuration at the primary focus, the six filters and their switching mechanism have to be arranged in a very tight space around the camera. For this reason, a novel magnetic positioning mechanism have been proposed for WFST, as shown in Fig. 6. When a filter is not in use, it is stowed on the outer frame of the camera. When in use, it is pushed to the vicinity of its nominal position and clamped into place by the magnetic force. In this way, high positioning accuracy can be achieved by relatively simple and light-weighted mechanics.


<figure>
<div align=center>
  <img src="/images/telescope-14.png" width="500" title="Figure 6" />
    <figcaption>
      <h5>Figure 6: 3D sketch of the filters and their switching mechanism.</h5>
  </figcaption>
  </div>
</figure>

The ADC consists of a pair of lensm (lens with wedge) that rotate in opposite directions to compensate atmospheric dispersion. This design avoids the use of flint glasses and therefore increases the UV transmission. Raytracing simulations show that 80% of the spot energy is encircled within a diameter of 0.4$^{\prime\prime}$ across the full 3$^{\circ}$ FoV in such a primary-focus optical design.


As the core of our primary-focus design, the PFA is an integrated unit that accommodates five corrector lenses, a pair of ADC lenses, six filters, a shutter and a mosaic CCD camera. The corrector lenses are supported by invar lens cells, which are connected to the invar pads glued to the rim of the lenses via flexures. The lens cell is then mounted to the inner shell of the PFA through spacers and adjusting pins that adjust the tip/tilt and the decenter of each lens. A total of 24 lateral supports are used for C1, while other lenses use 12 supports per each. A filter exchanging mechanism moves the filter at work into the working position, while keeping the other five filters in stow positions around the cryostat of the camera. The overall PFA structure extends a total length exceeding 2.7 meters and a total weight of 1.8 tons approximately. 


A look-up table (LUT) based on finite element analysis is firstly established to carry out the correction process, where both rigid-body misalignment errors of the PFA and surface figure errors on M1 due to gravitational deformation at various elevation angles as well as large-scale thermal deformation as a result of ambient temperature variation are corrected. Furthermore, close-loop active wavefront corrections based on focal-plane wavefront sensors are used to correct the residual errors in the PFA alignment and the low-order bending errors on M1. The flowchart of the AOS is shown in Fig. 7.


<figure>
<div align=center>
  <img src="/images/telescope-10.png" width="500" title="Figure 7" />
    <figcaption>
      <h5>Figure 7: Flowchart of the active optics system for WFST.</h5>
  </figcaption>
  </div>
</figure>



Active optics (AO) is equipped to keep the telescope in a seeing-limited condition and to reduce PFA misalignment and primary mirror deformation. The relative position of the PFA with respect to the primary mirror is measured in real time by a laser tracker positioned near the center of the primary mirror as shown in Fig. 8. Several sphere mounted retroreflectors (SMR) are located on the outer shell of the PFA. The measured misalignments (such as piston, decenter, and tilt errors) are then compensated by the rigid-body motion of the hexapod supporting the PFA. In this AO system, we utilize the curvature wavefront sensors at each of the four sides of the 3$^{\circ}$ field to measure the overall wavefront aberrations in real time. Each of these wavefront sensors is made up of two separate CCD detectors delivering intra- and extra-focal images, respectively. The measured defocused images are decomposed into Zernike polynomials, and their deviations from the designed values are used as merit functions. An iterative damped least square (DLS) method then minimizes the merit functions until an acceptable level is reached. In each correction period, the output wavefront corrections, interpreted as the 5-DOF rigid-body motions for PFA and lower-order Zernike correction coefficients for M1, are sent to the telescope control system, which drives the PFA hexapod and M1 active supporting system accordingly. 


<figure>
<div align=center>
  <img src="/images/telescope-11.png" width="600" title="Figure 8" />
    <figcaption>
      <h5>Figure 8: The laser tracker alignment system.</h5>
  </figcaption>
  </div>
</figure>


