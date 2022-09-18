---
title: "Test:MathJax"
date: 2022-09-16T15:11:51+08:00
draft: true
# description
description: "This is meta description"
math: true
---

# 行内公式实例：
行内公式：$e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n \qquad (1)$。

$J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，行内公式示例}$

# 块公式实例：

<div>$$
\begin{align}
    \sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
              & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
                &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
            &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\ 
              &\approx \frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right) \\
\end{align}
$$</div>

<div>$$
\begin{cases}
    a_1x+b_1y+c_1z=d_1 \\ 
    a_2x+b_2y+c_2z=d_2 \\ 
    a_3x+b_3y+c_3z=d_3 \\
\end{cases}
$$</div>

<div>$$
\begin{pmatrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
\end{pmatrix}
$$</div>

$$
AveP = \int_0^1 p(r) dr
$$