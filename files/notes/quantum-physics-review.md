# 量子物理复习笔记

## 四条主线

### 波函数、叠加与测量

核心能力：归一化、区域概率、正交归一完备集、任意态按本征态展开、展开系数、概率、期望值、叠加态时间演化、测量后坍缩，以及区分本征态、定态和一般叠加态。这是势阱、角动量、自旋等题目的共同语言。

### 薛定谔方程与一维模型

核心能力：按势能分区写定态薛定谔方程，根据 $E-U$ 的符号选择振荡解或指数解，排除无穷远发散项，使用波函数及其导数连续条件，得到能量条件，再进一步做归一化、展开、测量与时间演化。一维无限深势阱是百分之百要求掌握的模型。

### 算符、对易关系与角动量

核心能力：位置、动量、能量算符，厄米算符、本征值与本征函数，对易子计算，对易与共同本征态，不确定性关系，$L^2,L_z$ 本征值，$l,m$ 取值、简并和角动量相加。角动量本征值、本征态及量子数关系属于重中之重。

### 自旋、磁矩与角动量耦合

核心能力：Pauli 矩阵，$S_x,S_y,S_z$ 的本征值和本征态，任意方向自旋算符，不同自旋基之间展开，测量概率、平均值、连续测量，自旋在磁场中的时间演化，$J=L+S$，朗德 $g$ 因子，磁矩外场投影，Stern–Gerlach 分裂，以及 LS 耦合和原子态项 ${}^{2S+1}L_J$。

# 核心公式速查

## 常用常数和公式

| 内容 | 公式 | 用法 |
|:---|:---|:---|
| 元电荷 | $e=1.6\times10^{-19}\,\mathrm C$ | eV 与 J 换算，判断电子电荷符号。 |
| 电子质量 | $m_e=9.1\times10^{-31}\,\mathrm{kg}$ | 出现在 Bohr 模型、Compton、磁矩和有效质量题中。 |
| Planck 常数 | $h=6.626\times10^{-34}\,\mathrm{J\,s}$ | 会在 $E=h\nu$、$p=h/\lambda$ 中使用；$\hbar=h/(2\pi)$ 仍要会换。 |
| 光速 | $c=3.0\times10^8\,\mathrm{m\,s^{-1}}$ | 光子能量、相对论、精细结构常数中使用。 |
| 精细结构常数 | $\alpha=\dfrac{e^2}{4\pi\varepsilon_0\hbar c}\simeq\dfrac1{137}$ | 会把 $v_n=Z\alpha c/n$、Bohr 能级和半径联系起来。 |
| Coulomb 常数组合 | $\dfrac{e^2}{4\pi\varepsilon_0}=1.44\,\mathrm{nm\,eV}$ | 氢原子能量估算、不确定关系估算和类氢模型代入。 |
| 氢原子 Bohr 半径 | $r_n=\dfrac{n^2 4\pi\varepsilon_0\hbar^2}{m_e e^2}$ | 这是氢原子公式；类氢离子要改为 $r_n=n^2a_0/Z$。 |
| Bohr 能量 | $E_n=-\dfrac{m_e(\alpha c)^2}{2n^2}$ | 氢原子 $E_n=-13.6/n^2\,\mathrm{eV}$；类氢离子要乘 $Z^2$。 |
| LS 耦合朗德因子 | $g_J=\dfrac32+\dfrac12\left(\dfrac{\hat S^2-\hat L^2}{\hat J^2}\right)$ | 代本征值时用 $S(S+1),L(L+1),J(J+1)$，并求磁矩和 SG 分裂。 |
| 含时薛定谔方程 | $i\hbar\dfrac{\partial\Psi(\mathbf r,t)}{\partial t}=\left[-\dfrac{\hbar^2}{2m}\nabla^2+U(\mathbf r,t)\right]\Psi(\mathbf r,t)$ | 会分离变量、写定态方程、判断势场分段解的形式。 |

Pauli 矩阵也会给：

``` math
\sigma_x=
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix},
\qquad
\sigma_y=
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix},
\qquad
\sigma_z=
\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}.
```

它们不是用来“看一眼就结束”的公式；要掌握的是 $S_i=\hbar\sigma_i/2$ 的本征态、不同自旋基之间的展开、测量概率、平均值和连续测量后的坍缩。

## 常数和基本关系

| 名称 | 公式 | 备注 |
|:---|:---|:---|
| 名称 | 公式 | 备注 |
| Planck-Einstein 关系 | $E=h\nu=\hbar\omega$ | 光子能量 |
| 光子动量 | $p=\dfrac{h}{\lambda}=\hbar k$ | 对光子成立 |
| de Broglie 关系 | $\lambda=\dfrac{h}{p}$ | 实物粒子物质波 |
| 角频率和波数 | $\omega=2\pi\nu,\quad k=2\pi/\lambda$ | 平面波常用 |
| Bohr 磁子 | $\mu_B=\dfrac{e\hbar}{2m_e}$ | 磁矩量级 |
| 电子 Compton 波长 | $\lambda_C=\dfrac{h}{m_ec}$ | $\Delta\lambda=\lambda_C(1-\cos\theta)$ |

## 量子力学基本方程

时间依赖薛定谔方程：

``` math
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf r,t)=\hat H\Psi(\mathbf r,t)
```

非相对论单粒子哈密顿量：

``` math
\hat H=-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r,t)
```

势能不显含时间时，令

``` math
\Psi(\mathbf r,t)=\psi(\mathbf r)e^{-iEt/\hbar}
```

得到定态薛定谔方程：

``` math
\hat H\psi(\mathbf r)=E\psi(\mathbf r)
```

概率密度和概率流：

``` math
\rho=|\Psi|^2,\qquad
\mathbf j=\frac{\hbar}{2mi}\left(\Psi^*\nabla\Psi-\Psi\nabla\Psi^*\right)
```

连续性方程：

``` math
\frac{\partial\rho}{\partial t}+\nabla\cdot \mathbf j=0
```

## 常用算符

| 力学量 | 算符 |
|:---|:---|
| 力学量 | 算符 |
| 位置 | $\hat x=x,\ \hat{\mathbf r}=\mathbf r$ |
| 动量 | $\hat p_x=-i\hbar\dfrac{\partial}{\partial x},\quad \hat{\mathbf p}=-i\hbar\nabla$ |
| 动能 | $\hat T=-\dfrac{\hbar^2}{2m}\nabla^2$ |
| 角动量 | $\hat{\mathbf L}=\hat{\mathbf r}\times \hat{\mathbf p}$ |
| Hamiltonian | $\hat H=\hat T+\hat V$ |

平均值：

``` math
\langle Q\rangle=\int \Psi^*(\mathbf r,t)\hat Q\Psi(\mathbf r,t)\,d\tau
```

未归一化时：

``` math
\langle Q\rangle=\frac{\int \Psi^*\hat Q\Psi\,d\tau}{\int |\Psi|^2\,d\tau}
```

## 常用模型结论

无限深势阱 $0<x<a$：

``` math
\psi_n(x)=\sqrt{\frac{2}{a}}\sin\frac{n\pi x}{a},\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2},\quad n=1,2,\cdots
```

一维谐振子：

``` math
V(x)=\frac12m\omega^2x^2,\qquad
E_n=\left(n+\frac12\right)\hbar\omega,\quad n=0,1,2,\cdots
```

轨道角动量：

``` math
\hat L^2Y_l^m=\hbar^2l(l+1)Y_l^m,\qquad
\hat L_zY_l^m=m\hbar Y_l^m
```

量子数范围：

``` math
l=0,1,2,\cdots,\qquad m=-l,-l+1,\cdots,l
```

自旋 $1/2$：

``` math
\hat{\mathbf S}=\frac{\hbar}{2}\boldsymbol\sigma,\qquad
\hat S_z\chi_\pm=\pm\frac{\hbar}{2}\chi_\pm
```

Pauli 矩阵：

``` math
\sigma_x=
\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\sigma_y=
\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
\sigma_z=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
```

任意方向 $\mathbf n=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ 的自旋向上态：

``` math
|\mathbf n,+\rangle
=\cos\frac{\theta}{2}|z+\rangle
+e^{i\varphi}\sin\frac{\theta}{2}|z-\rangle
```

朗德因子和磁矩投影：

``` math
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}
```

``` math
\boldsymbol\mu_J=-g_J\mu_B\frac{\mathbf J}{\hbar},\qquad
E_B=g_J\mu_B m_JB
```

Stern–Gerlach 分裂条数：

``` math
m_J=-J,-J+1,\cdots,J,\qquad \text{分裂条数}=2J+1
```

Compton 散射：

``` math
\Delta\lambda=\lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta)
```

光电效应：

``` math
h\nu=A+\frac12mv_{\max}^2=A+eV_0,\qquad \nu_0=\frac{A}{h}
```

Bohr 氢原子能级：

``` math
E_n=-\frac{13.6\ \mathrm{eV}}{n^2},\qquad
\frac{1}{\lambda}=R\left(\frac1{n_f^2}-\frac1{n_i^2}\right)
```

Bloch 定理：

``` math
\psi_k(x)=e^{ikx}u_k(x),\qquad u_k(x+a)=u_k(x)
```

**注意：**Bloch 球可作为自旋态表示掌握；Bell 态、CNOT 和量子计算线路只做概念识别，不列为主干公式。

# 导论、电子发现、原子模型

## 原子概念的实验基础

课程从原子论历史开始：古希腊的“不可分割”思想只是哲学设想，真正使原子概念进入物理学的是 19 世纪化学定律和 20 世纪初的实验验证。关键线索如下：

- 定比定律、倍比定律支持元素由离散基本单元组成。

- Avogadro 引入分子概念，使原子和分子区分开。

- Brown 运动经 Einstein 理论解释后，成为分子热运动的证据。

关键不是记历史细节，而是理解量子物理的出发点：微观世界不是连续介质的简单缩小版，许多宏观直觉会失效。

## 电子发现和原子结构

Thomson 通过阴极射线实验发现电子，证明阴极射线是带负电的粒子，并测得荷质比 $e/m$。Millikan 油滴实验测定基本电荷 $e$，于是电子质量也可确定。

早期 Thomson “枣糕模型”认为负电子嵌在均匀正电荷背景中。Rutherford 用 $\alpha$ 粒子散射发现少数粒子发生大角散射，说明原子正电荷和绝大部分质量集中在极小的原子核内。

Rutherford 核式模型的困难：

1.  按经典电动力学，绕核运动的电子有加速度，应连续辐射能量并坠入原子核。

2.  连续辐射应给出连续光谱，但实验看到原子发射和吸收具有分立谱线。

3.  原子稳定性、谱线规律和电子轨道无法由经典理论自洽解释。

这些困难为 Bohr 模型和后来的量子力学打开入口。

## Rutherford 散射公式和核尺度证据

对电荷为 $z e$、动能为 $E_k$ 的入射粒子，在原子核库仑场中发生弹性散射时，Rutherford 微分散射截面具有

``` math
\frac{d\sigma}{d\Omega}
=\left(\frac{1}{4\pi\varepsilon_0}\frac{zZe^2}{4E_k}\right)^2
\frac{1}{\sin^4(\theta/2)}
```

的角分布。这里 $Z e$ 是原子核电荷，$\theta$ 是散射角。最重要的实验特征是：小角散射很多，大角散射虽少但绝不为零，而且散射率随核电荷增大而迅速增强。

这说明：

- 原子内部绝大部分空间是空的，所以大多数 $\alpha$ 粒子近似直穿。

- 正电荷不能均匀铺满整个原子，否则不可能一次受到足够大的冲量而反向散射。

- 原子的正电荷和质量集中在远小于原子尺度的原子核内。

Rutherford 公式验证了核式结构，却没有解决电子为何不辐射坠核，这正是 Bohr 理论要处理的问题。

# 黑体辐射、紫外灾难、Planck 假设

## 黑体辐射

热辐射是物体中分子、原子因热运动而发射电磁波。黑体是理想模型：能完全吸收任意波长电磁波，同时在热平衡时发射只由温度决定的辐射谱。

两个实验定律：

Stefan-Boltzmann 定律：

``` math
M=\sigma T^4
```

黑体总辐射本领与绝对温度四次方成正比。

Wien 位移定律：

``` math
\lambda_m T=b
```

温度越高，辐射峰值波长越短。

经典理论的失败：

- Wien 公式能描述高频短波部分，但低频不准。

- Rayleigh-Jeans 公式能描述低频长波部分：

``` math
u(\nu,T)=\frac{8\pi\nu^2}{c^3}kT
```

但在高频时发散，称为“紫外灾难”。

Planck 的关键假设：

谐振子和辐射场交换能量不是连续的，而是以

``` math
\varepsilon_n=nh\nu,\qquad n=0,1,2,\cdots
```

为单位。由此得到 Planck 公式：

``` math
u(\nu,T)=\frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/kT}-1}
```

极限关系：

- 当 $h\nu\ll kT$，回到 Rayleigh-Jeans 公式。

- 当 $h\nu\gg kT$，回到 Wien 公式。

关键点：黑体辐射说明经典能量均分定理在微观高频振动上失效，第一次引入“能量量子化”。

# Bohr 模型、氢光谱、Frank-Hertz、早期量子论局限

## 氢原子光谱

氢原子谱线具有规律性。Balmer 公式和 Rydberg 公式写作：

``` math
\frac{1}{\lambda}=R\left(\frac1{n_f^2}-\frac1{n_i^2}\right),\qquad n_i>n_f
```

常见线系：

- Lyman 系：$n_f=1$，紫外。

- Balmer 系：$n_f=2$，可见光为主。

- Paschen 系：$n_f=3$，红外。

光谱分立意味着原子内部能量只能取分立值。

## Bohr 三个核心假设

1.  定态假设：电子只能在某些分立稳定轨道上运动，处于这些轨道时不辐射电磁波。

2.  频率条件：电子从能量 $E_i$ 的定态跃迁到 $E_f$ 时，辐射或吸收光子：

``` math
h\nu=E_i-E_f
```

1.  对应原理：量子数很大时，量子理论结果应趋近经典理论。

Bohr 还引入角动量量子化：

``` math
L=mvr=n\hbar
```

氢原子半径和能级：

``` math
r_n=a_0n^2,\qquad
E_n=-\frac{13.6\ \mathrm{eV}}{n^2}
```

## Bohr 模型的意义和局限

意义：

- 第一次把原子稳定性和光谱线联系到分立能级。

- 成功解释氢原子和类氢离子光谱。

- Franck-Hertz 实验支持原子能级分立。

局限：

- 本质仍是半经典轨道模型。

- 难以解释多电子原子、谱线强度、精细结构、Zeeman 效应。

- “电子有确定轨道”的图像后来被波函数和概率云取代。

关键点：Bohr 模型是过渡理论。它的能级结果对氢原子有用，但其轨道图像不是现代量子力学图像。

Franck-Hertz 实验中，电子与原子碰撞。电子能量尚未达到原子第一激发能时主要发生弹性碰撞；达到特定能量后，电子可把固定能量交给原子，使收集电流周期性下降。这直接表明原子只能吸收分立能量。

若考虑原子核并非静止，氢样原子的电子质量应替换为约化质量

``` math
\mu=\frac{m_eM}{m_e+M}.
```

于是 Rydberg 常数和能级会有小修正。不同同位素的核质量不同，因此谱线位置略有差异；氘的发现就是同位素位移的重要例子。

# 光电效应、Compton 散射、de Broglie 物质波

## 光电效应

实验规律：

1.  对某一金属存在截止频率 $\nu_0$。若 $\nu<\nu_0$，无论光强多大都不能产生光电子。

2.  光电子最大动能只与入射光频率有关，与光强无关。

3.  当 $\nu>\nu_0$ 时，光强越大，单位时间逸出的电子越多，光电流越大。

4.  光电效应几乎瞬时发生，不能用经典波逐渐积累能量解释。

Einstein 光量子解释：

光由能量为 $h\nu$ 的光子组成，一个电子一次吸收一个光子。能量守恒：

``` math
h\nu=A+K_{\max}=A+\frac12mv_{\max}^2
```

用遏止电压 $V_0$ 表示：

``` math
eV_0=h\nu-A
```

因此 $V_0$ 对 $\nu$ 作图是直线，斜率为 $h/e$，截距给出逸出功。

经典解释失败点：

- 经典波认为能量由光强决定，不能解释最大动能只依赖频率。

- 经典波认为强光低频也可积累能量，不能解释截止频率。

- 经典波认为极弱光需要等待，不能解释瞬时性。

关键点：光电效应把 Planck 的“能量量子”从物质振子推广到光本身，说明光不仅有波动性，也有粒子性。

## Compton 散射

Compton 散射是 X 射线被物质散射后出现波长变长成分的现象。经典电磁波散射不能解释散射波长随角度改变；量子解释把过程看成光子与近自由电子的碰撞。

光子能量和动量：

``` math
E=h\nu,\qquad p=\frac{h}{\lambda}
```

由能量守恒和动量守恒得到：

``` math
\Delta\lambda=\lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta)
```

其中 $\theta$ 是散射角。

结论：

- 波长改变量只与散射角有关，与散射物质无关。

- $\theta=0$ 时 $\Delta\lambda=0$。

- $\theta=\pi$ 时 $\Delta\lambda=2\lambda_C$ 最大。

- 散射光中常同时有不变线和变线。不变线来自与束缚较紧的内层电子或整体原子相干散射，变线来自近自由外层电子。

关键点：Compton 散射直接证明光子具有动量，是光的粒子性强证据。

## de Broglie 假设

既然光具有波粒二象性，de Broglie 提出实物粒子也有波动性：

``` math
\lambda=\frac{h}{p},\qquad \nu=\frac{E}{h}
```

自由粒子平面波可写为：

``` math
\Psi(\mathbf r,t)=A e^{i(\mathbf k\cdot\mathbf r-\omega t)}
```

其中

``` math
\mathbf p=\hbar\mathbf k,\qquad E=\hbar\omega
```

实验依据：

- Davisson-Germer 电子衍射实验。

- G. P. Thomson 电子衍射实验。

- 后来的单电子双缝实验。

宏观物体也有 de Broglie 波长，但由于 $p$ 很大，$\lambda$ 极小，波动性难以观察。

# 双缝实验、概率幅、波粒二象性

### 双缝实验补充

只开上缝得到 $P_1=|\psi_1|^2$，只开下缝得到 $P_2=|\psi_2|^2$。两缝都开且不探测路径时，不是普通概率相加，而是

``` math
P=|\psi_1+\psi_2|^2=|\psi_1|^2+|\psi_2|^2+2\operatorname{Re}(\psi_1^*\psi_2).
```

最后一项是干涉项。任何能区分路径的信息都会使干涉项消失。

## 态叠加原理

如果 $\psi_1,\psi_2$ 是体系可能状态，则

``` math
\psi=c_1\psi_1+c_2\psi_2
```

也是可能状态。概率不是简单相加，因为

``` math
|\psi_1+\psi_2|^2=|\psi_1|^2+|\psi_2|^2+\psi_1^*\psi_2+\psi_2^*\psi_1
```

最后两项是干涉项。双缝实验中真正叠加的是概率幅，不是概率。

关键点：

- “粒子性”体现在探测时总是一个个整体出现。

- “波动性”体现在传播和叠加时有干涉、衍射。

- Born 解释把二者联系起来：波函数给出概率幅。

# 波函数、Born 统计解释、归一化和标准条件

## Born 统计解释

波函数本身一般不是直接可观测量，波函数模平方给出概率密度：

``` math
\rho(\mathbf r,t)=|\Psi(\mathbf r,t)|^2
```

在体积元 $d\tau$ 中发现粒子的概率：

``` math
dP=|\Psi(\mathbf r,t)|^2d\tau
```

归一化条件：

``` math
\int |\Psi|^2d\tau=1
```

对 $N$ 粒子体系：

``` math
|\Psi(\mathbf r_1,\mathbf r_2,\cdots,\mathbf r_N,t)|^2d\tau_1d\tau_2\cdots d\tau_N
```

表示同时在相应体积元中发现各粒子的概率。

## 波函数的标准条件

物理可接受的波函数通常要求：

1.  单值：同一空间点同一时刻概率密度唯一。

2.  有限：任意有限区域内概率有限。

3.  连续：波函数不能突跳。

4.  平方可积：束缚态必须可归一化。

5.  对有限势能，$\psi$ 和 $\dfrac{d\psi}{dx}$ 通常都连续。

若势能出现无限高壁，导数连续性可破坏，但波函数本身仍要满足边界条件，例如无限深势阱壁上 $\psi=0$。

# 薛定谔方程、定态、概率守恒

## 从自由粒子平面波到算符

自由粒子平面波：

``` math
\Psi=Ae^{i(px-Et)/\hbar}
```

对它作用：

``` math
i\hbar\frac{\partial}{\partial t}\Psi=E\Psi,\qquad
-i\hbar\frac{\partial}{\partial x}\Psi=p\Psi
```

由此得到能量和动量算符的形式：

``` math
\hat E=i\hbar\frac{\partial}{\partial t},\qquad
\hat p_x=-i\hbar\frac{\partial}{\partial x}
```

非相对论能量关系：

``` math
E=\frac{p^2}{2m}+V
```

替换为算符后得到薛定谔方程。

## 含时薛定谔方程

一维形式：

``` math
i\hbar\frac{\partial \Psi(x,t)}{\partial t}
=-\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2}+V(x,t)\Psi(x,t)
```

三维形式：

``` math
i\hbar\frac{\partial \Psi}{\partial t}
=\left[-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r,t)\right]\Psi
```

薛定谔方程不是由经典理论严格推出的，而是建立在物质波、算符替换和实验事实上的基本方程。它描述非相对论量子体系状态随时间演化。

## 定态

若 $V$ 不显含时间，设

``` math
\Psi(\mathbf r,t)=\psi(\mathbf r)f(t)
```

代入含时方程可分离变量，得到：

``` math
f(t)=e^{-iEt/\hbar}
```

空间部分满足：

``` math
\left[-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r)\right]\psi(\mathbf r)=E\psi(\mathbf r)
```

定态性质：

- 能量有确定值 $E$。

- 概率密度不随时间变：

``` math
|\Psi(\mathbf r,t)|^2=|\psi(\mathbf r)|^2
```

- 任意定态只多一个整体相位 $e^{-iEt/\hbar}$。

- 不同能量本征态的叠加通常不是定态，因为相对相位随时间变。

## 概率守恒

由薛定谔方程和复共轭方程可推出：

``` math
\frac{\partial |\Psi|^2}{\partial t}+\nabla\cdot\mathbf j=0
```

这说明概率不会凭空产生或消失，只会像流体一样在空间中流动。对于束缚态，若无穷远处波函数足够快趋零，总概率守恒。

# 无限深势阱、本征展开、测量

## 一维无限深势阱

势能：

``` math
V(x)=
\begin{cases}
0, & 0<x<a\\
\infty, & x\le 0\ \text{或}\ x\ge a
\end{cases}
```

阱外 $\psi=0$，阱内满足：

``` math
\frac{d^2\psi}{dx^2}+k^2\psi=0,\qquad
k^2=\frac{2mE}{\hbar^2}
```

通解：

``` math
\psi=A\sin kx+B\cos kx
```

边界 $\psi(0)=0$ 得 $B=0$；$\psi(a)=0$ 得：

``` math
\sin ka=0\Rightarrow ka=n\pi
```

能级：

``` math
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2}
```

归一化波函数：

``` math
\psi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a}
```

物理图像：

- 能量离散来自边界条件，也可看成 de Broglie 波在阱中形成驻波。

- 基态能量不为零：

``` math
E_1=\frac{\pi^2\hbar^2}{2ma^2}
```

这称为零点能，体现波动性和不确定关系。

- $n$ 越大，节点越多，波长越短，能量越高。

- 阱越宽、质量越大，能级间隔越小，趋向经典连续能量。

正交归一：

``` math
\int_0^a\psi_m^*(x)\psi_n(x)\,dx=\delta_{mn}
```

完备展开：

``` math
\psi(x,0)=\sum_{n=1}^{\infty}c_n\psi_n(x),\qquad
c_n=\int_0^a\psi_n^*(x)\psi(x,0)\,dx
```

时间演化：

``` math
\Psi(x,t)=\sum_{n=1}^{\infty}c_n\psi_n(x)e^{-iE_nt/\hbar}
```

能量测量：

- 可能结果为 $E_n$。

- 概率为 $|c_n|^2$。

- 平均能量为

``` math
\langle E\rangle=\sum_n |c_n|^2E_n
```

测量后若得到 $E_m$，状态塌缩到 $\psi_m$。

## 测量假设

若

``` math
\Psi=\sum_n c_n\phi_n
```

其中 $\phi_n$ 是 $\hat A$ 的正交归一本征态，则测量 $A$：

- 可能结果为 $a_n$。

- 得到 $a_n$ 的概率为 $|c_n|^2$。

- 测量后状态塌缩到对应本征态 $\phi_n$，若有简并则塌缩到对应本征子空间。

- 平均值为

``` math
\langle A\rangle=\sum_n |c_n|^2a_n
```

连续谱时把求和换为积分。

# 有限深势阱、宇称、势垒和隧穿

## 宇称和对称势

空间反射算符：

``` math
\hat P\psi(x)=\psi(-x)
```

若

``` math
\hat P\psi=\psi
```

称为偶宇称；若

``` math
\hat P\psi=-\psi
```

称为奇宇称。

若势能满足

``` math
V(x)=V(-x)
```

则 Hamiltonian 与宇称算符对易：

``` math
[\hat H,\hat P]=0
```

所以能量本征态可选为具有确定宇称的态。对有限深对称势阱，这会把求解拆成偶解和奇解，减少计算量。

## 一维有限深势阱

典型对称形式：

``` math
V(x)=
\begin{cases}
-V_0, & |x|<a\\
0, & |x|\ge a
\end{cases}
```

束缚态满足 $-V_0<E<0$。阱内波函数振荡，阱外指数衰减：

``` math
\psi_{\text{in}}\sim \sin kx,\cos kx,\qquad
\psi_{\text{out}}\sim e^{-\kappa |x|}
```

其中

``` math
k=\frac{\sqrt{2m(E+V_0)}}{\hbar},\qquad
\kappa=\frac{\sqrt{-2mE}}{\hbar}
```

边界条件要求 $\psi$ 和 $\psi'$ 连续，得到超越方程。常见写法：

偶宇称：

``` math
k\tan(ka)=\kappa
```

奇宇称：

``` math
-k\cot(ka)=\kappa
```

要点：

- 能级仍离散，但数目有限。

- 波函数会渗入经典禁区，禁区内概率不为零。

- 一维有限深吸引势阱总至少有一个束缚态，通常是偶宇称基态。

- 势阱越深、越宽，束缚态数目越多，能级越接近无限深势阱。

## 势垒散射和隧穿

方势垒：

``` math
V(x)=
\begin{cases}
0, & x<0\\
V_0, & 0<x<a\\
0, & x>a
\end{cases}
```

经典结论：

- 若 $E>V_0$，粒子越过势垒。

- 若 $E<V_0$，粒子完全反射。

量子结论：

- $E>V_0$ 时仍可能反射。

- $E<V_0$ 时仍可能透射，称为量子隧穿。

当 $E<V_0$ 时，势垒内：

``` math
\psi_{II}=Ce^{\kappa x}+De^{-\kappa x},\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}
```

厚势垒近似透射系数：

``` math
T\propto e^{-2\kappa a}
```

定性依赖：

- 势垒越宽 $a$ 越大，透射越小。

- 势垒越高 $V_0-E$ 越大，透射越小。

- 质量越大，透射越小。

概率流用于定义反射和透射：

``` math
R=\frac{j_{\text{ref}}}{j_{\text{inc}}},\qquad
T=\frac{j_{\text{trans}}}{j_{\text{inc}}},\qquad
R+T=1
```

当 $E>V_0$ 时可能出现共振透射，特定条件下 $T=1$。这与光学薄膜中的干涉透射类似。

``` math
I\propto e^{-2\kappa d},
```

其中 $d$ 是针尖到样品距离。因此距离变化一个原子尺度就会引起明显电流变化，反馈系统据此重建表面形貌和局域电子态。

# 隧穿结论、谐振子、零点能

## 一维谐振子

势能：

``` math
V(x)=\frac12m\omega^2x^2
```

Hamiltonian：

``` math
\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\omega^2x^2
```

能级：

``` math
E_n=\left(n+\frac12\right)\hbar\omega,\qquad n=0,1,2,\cdots
```

特点：

- 能级等间隔：

``` math
E_{n+1}-E_n=\hbar\omega
```

- 基态能量不为零：

``` math
E_0=\frac12\hbar\omega
```

- 本征函数含 Hermite 多项式：

``` math
\psi_n(\xi)=N_n H_n(\xi)e^{-\xi^2/2},\qquad
\xi=\sqrt{\frac{m\omega}{\hbar}}x
```

- 本征态有确定宇称：$n$ 偶为偶函数，$n$ 奇为奇函数。

- 每个能级只有一个线性无关本征函数，一维谐振子能级非简并。

物理意义：

很多体系在稳定平衡位置附近都可近似为谐振子，例如晶格中原子的小振动。量子谐振子也是黑体辐射、声子、量子场模式等概念的基础。

经典对应：

当 $n\to\infty$ 时，量子概率分布的包络趋向经典谐振子概率分布。经典粒子在转折点速度小，停留时间长，概率密度大；量子低能态则有明显波动结构。

# 算符、测量和力学量时间演化

## 为什么需要算符

位置概率密度由 $|\Psi(x,t)|^2$ 直接给出，所以位置平均值：

``` math
\langle x\rangle=\int x|\Psi(x,t)|^2dx
```

但“粒子在某点的动量”没有一般意义。动量与波长有关，而波长是整体波动性质。因此量子力学中用动量算符：

``` math
\hat p_x=-i\hbar\frac{\partial}{\partial x}
```

平均动量：

``` math
\langle p_x\rangle=\int \Psi^*(-i\hbar\partial_x)\Psi\,dx
```

推广原则：经典力学量若可写成 $Q(\mathbf r,\mathbf p)$，在位置表象中可把

``` math
\mathbf r\to \hat{\mathbf r},\qquad
\mathbf p\to -i\hbar\nabla
```

得到对应算符。自旋这类纯量子量没有经典对应，也必须由算符描述。

## 厄米算符

力学量测量结果必须是实数，因此可观测量对应厄米算符。厄米条件：

``` math
\int \phi^*(\hat A\psi)d\tau=\int (\hat A\phi)^*\psi d\tau
```

厄米算符性质：

1.  本征值为实数。

2.  不同本征值对应本征函数正交。

3.  在适当条件下，本征函数构成完备集。

本征方程：

``` math
\hat A\phi_n=a_n\phi_n
```

若体系处于 $\phi_n$，测量 $A$ 必得 $a_n$。

## 力学量平均值随时间的演化

对可能显含时间的算符 $\hat A(t)$，由含时薛定谔方程可得

``` math
\frac{d\langle A\rangle}{dt}
=\frac{i}{\hbar}\langle[\hat H,\hat A]\rangle
+\left\langle\frac{\partial \hat A}{\partial t}\right\rangle.
```

若 $\hat A$ 不显含时间，而且

``` math
[\hat H,\hat A]=0,
```

则 $\langle A\rangle$ 不随时间变化，$A$ 是守恒量。注意“平均值守恒”与“每次测量都有确定值”不是一回事；只有态同时还是 $\hat A$ 的本征态时，单次测量结果才确定。

取 $\hat A=\hat x,\hat p$，可得到 Ehrenfest 定理：

``` math
\frac{d\langle x\rangle}{dt}=\frac{\langle p\rangle}{m},
\qquad
\frac{d\langle p\rangle}{dt}=-\left\langle\frac{\partial V}{\partial x}\right\rangle.
```

它说明量子平均值的运动形式接近经典方程，但一般有

``` math
\left\langle\frac{\partial V}{\partial x}\right\rangle
\ne
\frac{\partial V}{\partial x}\bigg|_{\langle x\rangle},
```

所以不能简单把量子粒子理解为沿一条经典轨道运动。

# 对易、共同本征态、不确定关系、升降算符

### 升降算符补充

谐振子可以不用先解微分方程，而用算符代数：

``` math
a=\sqrt{\frac{m\omega}{2\hbar}}\left(x+\frac{i}{m\omega}p\right),\qquad
a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(x-\frac{i}{m\omega}p\right).
```

``` math
[a,a^\dagger]=1,\qquad \hat H=\hbar\omega\left(a^\dagger a+\frac12\right).
```

$a^\dagger$ 把 $|n\rangle$ 升到 $|n+1\rangle$，$a$ 把 $|n\rangle$ 降到 $|n-1\rangle$，所以能级等间隔。

## 对易和可同时确定

对易子：

``` math
[\hat A,\hat B]=\hat A\hat B-\hat B\hat A
```

若

``` math
[\hat A,\hat B]=0
```

则通常可以选取共同本征函数，两个力学量可同时确定。若不对易，则一般不能同时有确定值。

位置和动量：

``` math
[\hat x,\hat p_x]=i\hbar
```

导致 Heisenberg 不确定关系：

``` math
\Delta x\,\Delta p_x\ge \frac{\hbar}{2}
```

一般形式：

``` math
\Delta A\,\Delta B\ge \frac12|\langle[\hat A,\hat B]\rangle|
```

重要理解：

- 不确定关系不是仪器精度不够，而是量子态本身的性质。

- 若波函数在空间越局域，其动量分布越宽。

- 无限深势阱基态零点能可由不确定关系定性理解。

## 完备力学量组

如果一个能量本征值对应多个线性无关本征态，称为简并。仅测量能量不能完全确定状态，需要再找与 Hamiltonian 对易的力学量来标记状态。

例如中心势场中：

``` math
[\hat H,\hat L^2]=0,\qquad [\hat H,\hat L_z]=0,\qquad [\hat L^2,\hat L_z]=0
```

可以用 $H,L^2,L_z$ 的共同本征态标记状态。若再有自旋，则还需 $S^2,S_z$ 或总角动量相关量。

# 轨道角动量算符、对易关系、Lz 本征函数

## 轨道角动量算符

经典定义：

``` math
\mathbf L=\mathbf r\times\mathbf p
```

量子中：

``` math
\hat{\mathbf L}=\hat{\mathbf r}\times\hat{\mathbf p}
```

分量：

``` math
\hat L_x=-i\hbar\left(y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y}\right)
```

``` math
\hat L_y=-i\hbar\left(z\frac{\partial}{\partial x}-x\frac{\partial}{\partial z}\right)
```

``` math
\hat L_z=-i\hbar\left(x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}\right)
```

对易关系：

``` math
[\hat L_x,\hat L_y]=i\hbar\hat L_z
```

循环置换得：

``` math
[\hat L_i,\hat L_j]=i\hbar\varepsilon_{ijk}\hat L_k
```

角动量平方：

``` math
\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2
```

且：

``` math
[\hat L^2,\hat L_i]=0
```

结论：

- 三个角动量分量不能同时确定。

- 可以同时确定角动量大小 $L^2$ 和任一分量，例如 $L_z$。

## 球坐标表达和本征值

球坐标下：

``` math
\hat L_z=-i\hbar\frac{\partial}{\partial\varphi}
```

本征方程：

``` math
\hat L_z\Phi(\varphi)=L_z\Phi(\varphi)
```

解为 $e^{im\varphi}$。由单值性：

``` math
\Phi(\varphi+2\pi)=\Phi(\varphi)
```

得到：

``` math
m=0,\pm1,\pm2,\cdots
```

因此：

``` math
L_z=m\hbar
```

角动量平方和 $z$ 分量共同本征函数是球谐函数：

``` math
Y_l^m(\theta,\varphi)
```

满足：

``` math
\hat L^2Y_l^m=\hbar^2l(l+1)Y_l^m
```

``` math
\hat L_zY_l^m=m\hbar Y_l^m
```

量子数：

``` math
l=0,1,2,\cdots,\qquad m=-l,\cdots,l
```

简并度：

对于给定 $l$，有 $2l+1$ 个不同 $m$。

空间取向量子化：

角动量大小为

``` math
|\mathbf L|=\sqrt{l(l+1)}\hbar
```

投影为 $m\hbar$，所以方向夹角满足：

``` math
\cos\theta=\frac{m}{\sqrt{l(l+1)}}
```

# 球谐函数、氢原子量子数和简并度

## 轨道量子数的字母记号

| $l$ |  0  |  1  |  2  |  3  |  4  |
|:-----:|:---:|:---:|:---:|:---:|:---:|
| 记号  |  s  |  p  |  d  |  f  |  g  |

注意：量子力学允许 $l=0$ 的 s 态，此时轨道角动量为零。这与 Bohr 模型中最低轨道也有非零角动量的图像不同，是抛弃经典行星轨道图像的重要原因。

## 氢原子量子力学图像

氢原子势能：

``` math
V(r)=-\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r}
```

定态方程在球坐标中可分离：

``` math
\psi_{nlm}(r,\theta,\varphi)=R_{nl}(r)Y_l^m(\theta,\varphi)
```

量子数：

- 主量子数：$n=1,2,3,\cdots$

- 轨道量子数：$l=0,1,\cdots,n-1$

- 磁量子数：$m=-l,\cdots,l$

非相对论氢原子能量只依赖 $n$：

``` math
E_n=-\frac{13.6\ \mathrm{eV}}{n^2}
```

因此有简并。对固定 $n$，不计自旋时简并度：

``` math
\sum_{l=0}^{n-1}(2l+1)=n^2
```

计入电子自旋后为 $2n^2$。

概率云：

现代图像中电子没有确定轨道。$|\psi_{nlm}|^2$ 给出空间概率分布，s、p、d 等轨道是概率云形状，不是电子绕核运动的路径。

# Stern-Gerlach 实验、空间量子化、自旋动机

## Stern-Gerlach 实验

经典磁矩经过非均匀磁场应形成连续偏转，因为磁矩方向可连续取值。但 Stern-Gerlach 实验中银原子束分裂为离散斑点，表明角动量投影只能取离散值。

若只考虑轨道角动量，基态银原子外层电子处于 $l=0$，无法解释分裂。因此引入电子自旋。

电子自旋是内禀角动量，不是电子真的绕自身经典旋转。它是电子内部自由度。

# 电子自旋假设、自旋磁矩、四个量子数

## 自旋 $1/2$ 算符

电子自旋量子数：

``` math
s=\frac12
```

自旋平方：

``` math
\hat S^2\chi=\hbar^2s(s+1)\chi=\frac34\hbar^2\chi
```

任意方向投影只能取：

``` math
S_n=\pm\frac{\hbar}{2}
```

Pauli 矩阵：

``` math
\sigma_x=
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix},\quad
\sigma_y=
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix},\quad
\sigma_z=
\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}
```

自旋算符：

``` math
\hat S_i=\frac{\hbar}{2}\sigma_i
```

$S_z$ 本征态：

``` math
\chi_+=
\begin{pmatrix}
1\\0
\end{pmatrix},\qquad
\chi_-=
\begin{pmatrix}
0\\1
\end{pmatrix}
```

# 自旋算符、Pauli 矩阵、任意方向自旋态

## 任意方向自旋态

单位方向：

``` math
\mathbf n=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)
```

对应算符：

``` math
\hat S_n=\mathbf n\cdot\hat{\mathbf S}
=\frac{\hbar}{2}
\begin{pmatrix}
\cos\theta&\sin\theta e^{-i\varphi}\\
\sin\theta e^{i\varphi}&-\cos\theta
\end{pmatrix}
```

本征值：

``` math
\pm\frac{\hbar}{2}
```

常用归一化本征态：

``` math
\chi_{\mathbf n,+}=
\begin{pmatrix}
\cos(\theta/2)\\
e^{i\varphi}\sin(\theta/2)
\end{pmatrix}
```

``` math
\chi_{\mathbf n,-}=
\begin{pmatrix}
-e^{-i\varphi}\sin(\theta/2)\\
\cos(\theta/2)
\end{pmatrix}
```

测量例子：

若电子处于 $S_z=+\hbar/2$ 态，再测 $S_x$：

``` math
\chi_{z+}=\frac{1}{\sqrt2}(\chi_{x+}+\chi_{x-})
```

所以得到 $S_x=\pm\hbar/2$ 的概率各为 $1/2$。这解释连续通过不同方向 Stern-Gerlach 装置时的概率结果。

# 自旋-轨道耦合、碱金属双线、Zeeman 效应

## 轨道磁矩

电子带负电，轨道角动量对应轨道磁矩：

``` math
\boldsymbol\mu_L=-\frac{e}{2m_e}\mathbf L=-\mu_B\frac{\mathbf L}{\hbar}
```

其中：

``` math
\mu_B=\frac{e\hbar}{2m_e}
```

投影：

``` math
\mu_{L,z}=-\mu_B m_l
```

## 自旋磁矩

电子自旋磁矩：

``` math
\boldsymbol\mu_S=-g_s\mu_B\frac{\mathbf S}{\hbar}
```

其中 $g_s\approx2$。因此：

``` math
\mu_{S,z}=-g_s\mu_B m_s
```

自旋磁矩和自旋角动量方向相反，因为电子带负电。

## 自旋-轨道耦合

在电子自身参考系中，原子核绕电子运动形成磁场，该磁场与电子自旋磁矩相互作用。相对论修正和 Thomas 进动后，常写作：

``` math
\hat H_{SO}=\xi(r)\hat{\mathbf L}\cdot\hat{\mathbf S}
```

利用：

``` math
\mathbf J=\mathbf L+\mathbf S
```

有：

``` math
\mathbf L\cdot\mathbf S
=\frac12(J^2-L^2-S^2)
```

因此能级分裂由 $j,l,s$ 决定。

对于一个电子 $s=1/2$：

``` math
j=l+\frac12\quad\text{或}\quad j=l-\frac12
```

当 $l=0$ 时只有 $j=1/2$，没有自旋-轨道双重分裂。

## 碱金属双线

碱金属原子有一个价电子在闭合壳层外，类似氢原子但原子实屏蔽使能级与氢不同。除 $s$ 能级外，$p,d,f$ 等能级因自旋-轨道耦合分裂为两个很近的能级。

典型例子是钠黄光双线。谱线双重结构来自 $p_{1/2}$ 和 $p_{3/2}$ 等精细结构能级差。

项符号：

``` math
{}^{2S+1}L_J
```

单电子碱金属中 $S=1/2$，所以重数 $2S+1=2$，常写如：

``` math
{}^2S_{1/2},\quad {}^2P_{1/2},\quad {}^2P_{3/2}
```

## 角动量相加

两个角动量量子数 $j_1,j_2$ 耦合后，总角动量 $j$ 可取：

``` math
j=|j_1-j_2|,\ |j_1-j_2|+1,\cdots,\ j_1+j_2
```

磁量子数：

``` math
m=m_1+m_2,\qquad m=-j,-j+1,\cdots,j
```

这是轨道和自旋耦合、多个电子 LS 耦合、原子项符号判断的核心规则。

## Zeeman 效应

外磁场中，磁矩与磁场相互作用：

``` math
\Delta E=-\boldsymbol\mu\cdot\mathbf B
```

弱磁场 LS 耦合下，总磁矩在 $\mathbf J$ 方向的有效投影可写作：

``` math
\boldsymbol\mu_J=-g_J\mu_B\frac{\mathbf J}{\hbar}
```

Lande 因子：

``` math
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}
```

磁场中能级附加能量：

``` math
\Delta E=m_Jg_J\mu_BB
```

Stern–Gerlach 类型题通常不要求算复杂谱线，而是问外场方向投影和分裂条数。对给定 $J$：

``` math
m_J=-J,-J+1,\cdots,J
```

因此最多出现 $2J+1$ 个空间分裂分量；相邻分量的能量差在均匀弱磁场近似下为 $g_J\mu_BB$。非均匀磁场中力的大小还与磁场梯度有关。

正常 Zeeman 效应：

- 总自旋 $S=0$。

- 通常出现三重分裂。

反常 Zeeman 效应：

- $S\ne0$。

- 分裂更复杂，可出现四重、六重等结构。

选择定则常用：

``` math
\Delta m_J=0,\pm1
```

其中 $\Delta m_J=0$ 对应 $\pi$ 光，$\Delta m_J=\pm1$ 对应 $\sigma$ 光。

# 角动量耦合规则、LS 耦合、原子项

## LS 耦合和原子项符号

轻原子中常用 LS 耦合：

1.  先把各电子轨道角动量耦合成总 $\mathbf L$。

2.  把各电子自旋耦合成总 $\mathbf S$。

3.  再把 $\mathbf L$ 和 $\mathbf S$ 耦合成总 $\mathbf J$。

项符号：

``` math
{}^{2S+1}L_J
```

其中：

- $2S+1$ 是多重度。

- $L=0,1,2,3,\cdots$ 分别记为 S, P, D, F, ...

- $J=|L-S|,\cdots,L+S$。

Hund 规则可作为定性判断基态的工具：

1.  在同一电子组态中，总自旋 $S$ 越大能量通常越低。

2.  对给定 $S$，总轨道角动量 $L$ 越大通常越低。

3.  不到半满时最小 $J$ 低，超过半满时最大 $J$ 低。

# 全同粒子、交换对称性、Pauli 不相容原理、两电子自旋态

## 全同粒子的不可分辨性

若两个粒子完全相同，在量子力学中交换粒子标签不应产生可观测差别。因此：

``` math
|\Psi(1,2)|^2=|\Psi(2,1)|^2
```

允许：

对称波函数：

``` math
\Psi(1,2)=+\Psi(2,1)
```

反对称波函数：

``` math
\Psi(1,2)=-\Psi(2,1)
```

对应：

- 玻色子：整数自旋，总波函数对称。

- 费米子：半整数自旋，总波函数反对称。

电子是自旋 $1/2$ 费米子，所以多电子总波函数必须反对称。

## Pauli 不相容原理

Pauli 原理：

同一原子中不能有两个电子处于完全相同的单电子量子态。

单电子态由四个量子数标记：

``` math
n,\ l,\ m_l,\ m_s
```

同一空间轨道 $(n,l,m_l)$ 最多容纳两个电子，且自旋相反。

壳层容量：

固定 $n$：

``` math
2n^2
```

固定 $l$ 子壳层：

``` math
2(2l+1)
```

例如：

- s 子壳层最多 2 个电子。

- p 子壳层最多 6 个电子。

- d 子壳层最多 10 个电子。

- f 子壳层最多 14 个电子。

## 两电子自旋态

两个自旋 $1/2$ 电子可耦合出：

三重态 $S=1$，自旋对称：

``` math
|1,1\rangle=|\uparrow\uparrow\rangle
```

``` math
|1,0\rangle=\frac{1}{\sqrt2}(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)
```

``` math
|1,-1\rangle=|\downarrow\downarrow\rangle
```

单态 $S=0$，自旋反对称：

``` math
|0,0\rangle=\frac{1}{\sqrt2}(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)
```

由于电子总波函数必须反对称：

- 自旋对称时，空间波函数必须反对称。

- 自旋反对称时，空间波函数必须对称。

这解释氦原子中单态、三重态能级差异和某些能级缺失。

## Slater 行列式

多电子反对称波函数可用 Slater 行列式表示。两个电子例子：

``` math
\Psi(1,2)=\frac{1}{\sqrt2}
\begin{vmatrix}
\phi_a(1)&\phi_b(1)\\
\phi_a(2)&\phi_b(2)
\end{vmatrix}
```

若 $\phi_a=\phi_b$，行列式为零，表示两个电子不能占据同一单粒子态。

# 固体物理开场、Drude 模型、Fermi-Dirac、能带起源

## 从原子到固体：More is different

Anderson 的观点：不能把少数粒子的性质简单外推到大量粒子体系。固体中的新现象，如超导、超流、量子霍尔效应、能带、晶体管等，都是多体和周期结构带来的涌现性质。

## Drude 金属模型

Drude 模型把金属看成正离子背景中的电子气。基本假设：

1.  电子在两次碰撞之间近似自由运动。

2.  碰撞瞬时发生，使电子遗忘之前由电场获得的定向动量。

3.  平均碰撞时间为 $\tau$。

4.  电子与电子、电子与离子的相互作用在自由飞行阶段忽略。

电场中电子漂移速度：

``` math
\mathbf v_d=-\frac{e\tau}{m}\mathbf E
```

电流密度：

``` math
\mathbf j=-ne\mathbf v_d=\frac{ne^2\tau}{m}\mathbf E
```

电导率：

``` math
\sigma=\frac{ne^2\tau}{m}
```

电阻率：

``` math
\rho=\frac{1}{\sigma}=\frac{m}{ne^2\tau}
```

平均自由程：

``` math
\ell=v\tau
```

Drude 模型能解释 Ohm 定律、电导率数量级和 Hall 效应部分现象，但存在困难，例如电子热容、低温行为、平均自由程解释等，需要量子统计和能带理论。

## Fermi-Dirac 分布

电子是费米子，服从 Fermi-Dirac 分布：

``` math
f(E)=\frac{1}{e^{(E-\mu)/kT}+1}
```

在 $T=0$ 时：

- $E<E_F$ 的态被占据。

- $E>E_F$ 的态为空。

只有 Fermi 面附近的电子容易参与输运和热激发，这解释为什么经典电子气热容估计过大。

## 能带的形成

孤立原子有分立能级。若 $N$ 个原子靠近，原来相同的原子能级因波函数重叠和 Pauli 原理分裂为 $N$ 个非常密集的能级，形成准连续的能带。

定性图像：

- 重叠越强，能带越宽。

- 不同原子能级形成不同能带。

- 能带之间可能有禁带。

固体分类：

- 金属：Fermi 能级穿过能带，或价带和导带重叠。

- 半导体：价带满、导带空，禁带较窄。

- 绝缘体：禁带很宽，常温下电子难以跃迁到导带。

# 能带、半导体与量子信息边缘概念

## Bloch 定理

一维周期势：

``` math
V(x+a)=V(x)
```

定态薛定谔方程：

``` math
\left[-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+V(x)\right]\psi(x)=E\psi(x)
```

Bloch 定理：

``` math
\psi_k(x)=e^{ikx}u_k(x)
```

其中

``` math
u_k(x+a)=u_k(x)
```

物理意义：

电子在周期势中的本征波函数是“自由平面波乘以周期调制函数”。这说明晶体中电子虽然受离子周期势影响，但仍可用准动量 $k$ 标记。

Born-von Karman 周期边界条件：

``` math
\psi(x+L)=\psi(x),\qquad L=Na
```

给出 $k$ 的离散取值；当 $N$ 很大时，$k$ 几乎连续。

## Kronig-Penney 模型

Kronig-Penney 模型用周期方势垒近似晶体周期势。求解后得到某些能量允许，某些能量不允许。

一般结构：

``` math
F(E)=\cos(ka)
```

因为右边必须满足

``` math
-1\le \cos(ka)\le 1
```

所以只有满足

``` math
|F(E)|\le 1
```

的能量形成允带；不满足的能量形成禁带。

关键点：

- 能带不是人为假设，而是周期势场薛定谔方程的结果。

- 禁带来自波在周期结构中的 Bragg 反射和边界条件。

- $k$ 标记态，但电子速度和有效质量由 $E(k)$ 决定。

## 半导体、掺杂和 PN 结

本征半导体：

- 价带电子受热激发到导带，留下空穴。

- 电子和空穴共同导电。

- 温度升高时载流子浓度增加，电导增强。

掺杂半导体：

- 施主杂质提供接近导带的杂质能级，容易电离出电子，形成 n 型半导体。

- 受主杂质提供接近价带的空能级，容易形成空穴，形成 p 型半导体。

- 重点会判断多数载流子：n 型以电子为主，p 型以空穴为主。

PN 结：

- p 区空穴和 n 区电子在交界处扩散并复合，留下离化杂质形成空间电荷区。

- 内建电场阻碍继续扩散，平衡时扩散电流和漂移电流相互抵消。

- 正向偏置降低势垒，容易导通；反向偏置升高势垒，电流很小。

**注意：**超导、Josephson 效应、超导量子比特等属于拓展专题，不作为主干内容。

## 量子信息边缘补充

### 从经典比特到量子比特

量子信息出现的动机包括：1947 年晶体管把固体量子理论变成信息器件；扫描隧道显微镜已能在原子尺度操纵和排列信息载体；Feynman 则强调，若要高效模拟本质上遵循量子规律的自然界，计算机本身也应利用量子规律。这里的核心动机不是单纯“把元件继续缩小”，而是把叠加、相位、纠缠和测量直接变成信息处理资源。

因此课程从经典 bit 出发，依次建立 qubit、复合系统、量子门和纠缠，再用 EPR 与 Bell 不等式讨论这些资源为何没有经典定域模型。

经典 bit 在一次确定状态中只能是 0 或 1。量子 bit，简称 qubit，是一个两态量子系统，可由光子偏振、电子自旋、原子的两个能级或超导电路的两个低能态实现。

选择正交归一计算基 $\{|0\rangle,|1\rangle\}$ 后，纯态写作

``` math
|\psi\rangle=\alpha|0\rangle+\beta|1\rangle,
\qquad |\alpha|^2+|\beta|^2=1.
```

在计算基中测量：

- 得到 0 的概率为 $|\alpha|^2$，测量后态变为 $|0\rangle$。

- 得到 1 的概率为 $|\beta|^2$，测量后态变为 $|1\rangle$。

整体相位 $e^{i\gamma}|\psi\rangle$ 不改变任何测量概率，因此一个纯 qubit 只需两个实参数。常写为

``` math
|\psi\rangle=\cos\frac{\theta}{2}|0\rangle
+e^{i\varphi}\sin\frac{\theta}{2}|1\rangle.
```

它对应 Bloch 球上的单位矢量

``` math
\mathbf r=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta).
```

北极和南极分别是 $|0\rangle,|1\rangle$，赤道上包含

``` math
|\pm\rangle=\frac{|0\rangle\pm|1\rangle}{\sqrt2},
\qquad
|\pm i\rangle=\frac{|0\rangle\pm i|1\rangle}{\sqrt2}.
```

关键提醒：叠加态不是“经典地一会儿为 0、一会儿为 1”，相对相位 $\varphi$ 会在换基测量或干涉实验中产生可观测后果。

### 复合量子比特和 Hilbert 空间

两个 qubit 的状态空间是张量积

``` math
\mathcal H_{AB}=\mathcal H_A\otimes\mathcal H_B,
```

计算基为

``` math
|00\rangle,|01\rangle,|10\rangle,|11\rangle.
```

一般双比特态：

``` math
|\psi\rangle
=\alpha_{00}|00\rangle+\alpha_{01}|01\rangle
+\alpha_{10}|10\rangle+\alpha_{11}|11\rangle,
```

且

``` math
\sum_{i,j=0}^{1}|\alpha_{ij}|^2=1.
```

$n$ 个 qubit 的 Hilbert 空间维数为 $2^n$：

``` math
|\psi\rangle=\sum_{x=0}^{2^n-1}c_x|x\rangle,
\qquad \sum_x|c_x|^2=1.
```

这里 $|x\rangle$ 可同时理解为 $n$ 位二进制串和对应十进制编号。例如

``` math
|101\rangle=|5\rangle.
```

维数指数增长说明经典计算机完整存储一般量子态所需参数会迅速增加，但不能把一次量子测量误解为能同时读出全部 $2^n$ 个振幅；一次测量只得到一个结果。

### DiVincenzo 条件

量子计算硬件通常关注五项要求：

1.  有定义良好、可扩展的 qubit 物理系统。

2.  能把 qubit 初始化到已知标准态。

3.  相干时间足够长，至少能完成所需门操作。

4.  能实现通用量子门集合。

5.  能对单个 qubit 做可靠测量。

### 量子门和基本线路

孤立量子系统的可逆演化由幺正矩阵表示：

``` math
U^\dagger U=I.
```

常用单比特门：

``` math
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
```

``` math
H=\frac1{\sqrt2}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
```

它们的作用：

- $X$ 交换 $|0\rangle$ 和 $|1\rangle$，类似经典 NOT。

- $Z$ 保持 $|0\rangle$，把 $|1\rangle$ 乘以 $-1$，改变相对相位。

- $H$ 在计算基和 $|\pm\rangle$ 基之间转换，例如 $H|0\rangle=|+\rangle$。

典型双比特门 CNOT：控制位为 1 时翻转目标位，

``` math
|a,b\rangle\longmapsto|a,a\oplus b\rangle.
```

用 $H$ 和 CNOT 可从直积态制备 Bell 态：

``` math
|00\rangle\xrightarrow{H\otimes I}
\frac{|00\rangle+|10\rangle}{\sqrt2}
\xrightarrow{\mathrm{CNOT}}
\frac{|00\rangle+|11\rangle}{\sqrt2}.
```

单比特任意旋转加上一个能产生纠缠的双比特门，可构成通用量子门集合。实际计算还必须考虑门保真度、读出误差和量子纠错。

### 纠缠态、Bell 基和制备方法

复合系统的纯态若能写成

``` math
|\psi\rangle=|\phi\rangle_A\otimes|\chi\rangle_B,
```

则是可分离态；若不能作这样的因式分解，就是纠缠态。

四个 Bell 态构成双 qubit 空间的一组正交归一基：

``` math
|\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2},\qquad
|\Phi^-\rangle=\frac{|00\rangle-|11\rangle}{\sqrt2},
```

``` math
|\Psi^+\rangle=\frac{|01\rangle+|10\rangle}{\sqrt2},\qquad
|\Psi^-\rangle=\frac{|01\rangle-|10\rangle}{\sqrt2}.
```

以 $|\Phi^+\rangle$ 为例，任意一个 qubit 单独测量 0、1 的概率各为 $1/2$，但两边在同一计算基中测量总得到相同结果。相关性属于整体量子态，不能解释为两个子系统各自拥有独立纯态。

一种光学制备方法是自发参量下转换：泵浦光通过 BBO 晶体，小概率产生一对低频孪生光子。结合偏振分束器、半波片和两条不可区分的产生路径，可使 $|HH\rangle$ 与 $|VV\rangle$ 的概率幅相干叠加，制得偏振纠缠态。

纠缠不是普通的“两个结果经常一起出现”。普通相关可由共享的经典随机变量解释；Bell 纠缠在适当测量设置下会违反定域隐变量理论必须满足的不等式。

### EPR 佯谬：完备性、实在性和定域性

EPR 争论的核心不是量子力学算错实验结果，而是波函数是否给出了物理实在的完备描述。Bohm 把原始位置动量论证改写成更直观的自旋单态：

``` math
|\Psi^-\rangle
=\frac{1}{\sqrt2}
\left(|\uparrow\rangle_A|\downarrow\rangle_B
-|\downarrow\rangle_A|\uparrow\rangle_B\right).
```

若两边沿同一方向测量，自旋结果必相反。EPR 式推理结合两个观念：

- 实在性：若不扰动系统就能确定预言某物理量，则该物理量对应一个实在要素。

- 定域性：空间分离处的操作不能瞬时改变本地物理实在。

据此，EPR 认为远处粒子的结果似乎在测量前就已确定，波函数却没有列出这些确定值，所以量子力学可能不完备，需要隐变量补充。

哥本哈根式观点则拒绝给未测量的不相容物理量同时赋予预先存在的确定值。重要的是，EPR 论证本身还不能区分双方；Bell 定理才给出可实验判别的条件。

### Bell 不等式和量子预言

设两端分别选择测量方向 $\mathbf a,\mathbf b$，每次结果记为 $A,B=\pm1$。相关函数定义为

``` math
E(\mathbf a,\mathbf b)=\langle AB\rangle.
```

对自旋单态，量子力学预言

``` math
E(\mathbf a,\mathbf b)=-\mathbf a\cdot\mathbf b=-\cos\theta.
```

一类 Bell 不等式可写成

``` math
E(\mathbf a,\mathbf b)-E(\mathbf a,\mathbf c)
\le 1+E(\mathbf b,\mathbf c).
```

其推导只使用：每次结果由局域测量设置和共享隐变量 $\lambda$ 决定，且隐变量服从某个归一化概率分布。它并不要求知道 $\lambda$ 的具体物理形式，所以对整类定域隐变量理论成立。

更常见的 CHSH 形式为

``` math
S=E(\mathbf a,\mathbf b)+E(\mathbf a,\mathbf b')
+E(\mathbf a',\mathbf b)-E(\mathbf a',\mathbf b'),
```

定域隐变量理论要求

``` math
|S|\le2,
```

而量子力学在适当方向下可达

``` math
|S|=2\sqrt2.
```

因此 Bell 定理排除的不是一两个特定隐变量模型，而是同时坚持定域性和预先确定结果的一整类理论。

# 典型题型和解题模板

## 综合题模板

四道大题最可能从下列能力中组合：

1.  波函数归一化、展开、测量概率、期望值、时间演化和坍缩。

2.  一维无限深势阱或分段势场边界条件。

3.  自旋矩阵、基变换、连续测量或磁场中演化。

4.  角动量耦合、朗德因子、磁矩、SG 分裂和原子项符号。

答题时先写物理模型和基底，再写公式。只给最终数值而没有说明“为什么选这个基底/为什么这个边界条件”会丢掉很多过程分。

## 黑体辐射题

常问：

- 已知温度求峰值波长：用 $\lambda_mT=b$。

- 已知温度比较辐射功率：用 $M\propto T^4$。

- 判断经典公式适用极限：低频 Rayleigh-Jeans，高频 Wien，完整用 Planck。

答题要点：

1.  先判断是总辐射还是谱分布。

2.  总辐射用 Stefan-Boltzmann。

3.  峰值位置用 Wien。

4.  解释紫外灾难时指出经典能量均分导致高频发散。

## 光电效应题

常用方程：

``` math
eV_0=h\nu-A
```

步骤：

1.  找截止频率或截止波长：

``` math
h\nu_0=A,\qquad \lambda_0=\frac{c}{\nu_0}=\frac{hc}{A}
```

1.  若 $\nu<\nu_0$，无光电子。

2.  若 $\nu>\nu_0$，最大动能：

``` math
K_{\max}=h\nu-A
```

1.  光强只影响光电子数和饱和电流，不影响最大动能。

## Compton 散射题

步骤：

1.  写出：

``` math
\Delta\lambda=\lambda_C(1-\cos\theta)
```

1.  若求散射后光子能量：

``` math
E'=\frac{hc}{\lambda+\Delta\lambda}
```

1.  电子获得能量：

``` math
K_e=E-E'
```

1.  最大位移发生在 $\theta=180^\circ$。

## 一维势阱题

无限深势阱：

1.  先写边界 $\psi(0)=\psi(a)=0$。

2.  得出 $k=n\pi/a$。

3.  写 $E_n$ 和归一化 $\psi_n$。

4.  若给初态，做展开：

``` math
c_n=\int_0^a\psi_n^*(x)\psi(x,0)\,dx
```

1.  测量概率 $|c_n|^2$，平均能量 $\sum |c_n|^2E_n$。

有限深势阱：

1.  先判断束缚态还是散射态。

2.  对称势先分奇偶。

3.  阱内振荡，阱外衰减。

4.  用边界连续得到超越方程。

5.  只需定性时强调穿透和有限束缚态数。

## 分段定态薛定谔方程题

这是所有一维势阱、势垒和散射题的共同模板：

1.  画出势能分区，并在每个区域写定态方程
    ``` math
    \frac{d^2\psi}{dx^2}+\frac{2m}{\hbar^2}(E-U_i)\psi=0.
    ```

2.  若 $E>U_i$，写振荡解 $Ae^{ikx}+Be^{-ikx}$ 或 $A\sin kx+B\cos kx$。

3.  若 $E<U_i$，写指数解 $Ae^{\kappa x}+Be^{-\kappa x}$。

4.  无穷远处不能保留发散项；无限高壁处直接令 $\psi=0$。

5.  有限势垒边界通常要求 $\psi$ 和 $\psi'$ 连续。

6.  束缚态题由边界条件给出能量条件；散射题由入射、反射、透射振幅给出 $R,T$。

常见失分点：把振幅系数直接当成概率；若两侧波数不同，透射率不能只写透射振幅模平方。通常不需要展开概率流的繁琐代数，但要知道这个区别。

## 势垒隧穿题

1.  判断 $E<V_0$ 还是 $E>V_0$。

2.  $E<V_0$ 时势垒内指数衰减，透射大致：

``` math
T\sim e^{-2\kappa a}
```

1.  若问概率守恒，用概率流：

``` math
R+T=1
```

1.  若问影响因素：质量、势垒宽度、势垒高度都会指数影响隧穿。

## 算符和测量题

通用步骤：

1.  找被测量力学量对应算符 $\hat A$。

2.  求本征值和本征函数：

``` math
\hat A\phi_n=a_n\phi_n
```

1.  把初态展开：

``` math
\psi=\sum_n c_n\phi_n
```

1.  概率 $P_n=|c_n|^2$。

2.  平均值 $\langle A\rangle=\sum |c_n|^2a_n$。

3.  测量后塌缩到测得值对应本征态或本征子空间。

对易题：

1.  计算 $[\hat A,\hat B]$。

2.  若为 0，可同时确定，存在共同本征函数。

3.  若不为 0，写出对应不确定关系。

## 角动量题

记住三组公式：

``` math
L^2=\hbar^2l(l+1)
```

``` math
L_z=m\hbar
```

``` math
m=-l,-l+1,\cdots,l
```

角动量耦合：

``` math
j=|j_1-j_2|,\cdots,j_1+j_2
```

投影：

``` math
m=m_1+m_2
```

若写项符号：

1.  求总 $S$。

2.  求总 $L$，换成 S/P/D/F 字母。

3.  求可能 $J$。

4.  写成 ${}^{2S+1}L_J$。

## 朗德因子、磁矩和 SG 分裂题

常见题型是给出原子态项 ${}^{2S+1}L_J$，要求判断外磁场中投影、能级移动或 Stern–Gerlach 分裂。步骤如下：

1.  从多重度 $2S+1$ 反推出 $S$。

2.  把字母 S/P/D/F 分别换成 $L=0,1,2,3$。

3.  读出下标 $J$，列出 $m_J=-J,-J+1,\cdots,J$。

4.  计算朗德因子
    ``` math
    g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
    ```

5.  弱磁场能级移动用 $\Delta E=m_Jg_J\mu_BB$。

6.  SG 分裂条数为 $2J+1$；相邻投影的能量间隔为 $g_J\mu_BB$。

注意：这里考的是量子数、磁矩投影和分裂条数，不是 Zeeman 谱线的详细选择定则。

## 自旋测量题

自旋题先做五个判断：

1.  当前态写在哪个基底中，常见是 $z$ 基底。

2.  待测算符是谁，例如 $S_x,S_y,S_z$ 或 $S_{\mathbf n}$。

3.  写出待测算符的本征态，并把当前态展开到该本征态基底。

4.  展开系数模平方就是测量概率，期望值为各本征值按概率加权。

5.  如果题目继续测量，必须从上一次测量后的坍缩态重新开始。

常用展开：

``` math
|z+\rangle=\frac{|x+\rangle+|x-\rangle}{\sqrt2}
```

``` math
|z-\rangle=\frac{|x+\rangle-|x-\rangle}{\sqrt2}
```

若自旋沿 $\mathbf n$ 向上，测 $z$ 向上概率：

``` math
P(z+)=\cos^2\frac{\theta}{2}
```

测 $z$ 向下概率：

``` math
P(z-)=\sin^2\frac{\theta}{2}
```

连续 Stern-Gerlach 装置题的关键：每次选择某一路径之后，态已塌缩到该方向的本征态。

若有沿 $z$ 方向均匀磁场，先用哈密顿量给 $|z+\rangle,|z-\rangle$ 加上不同相位；再换到题目要求的测量基底。纯时间相位不改变能量测量概率，但相对相位会改变 $x/y$ 方向测量概率。

## Pauli 原理和电子组态题

步骤：

1.  写出每个电子量子数。

2.  检查是否有两个电子四个量子数完全相同。

3.  同一空间轨道最多两个电子，且 $m_s$ 相反。

4.  多电子总波函数必须反对称。

5.  两电子自旋单态/三重态要配合空间波函数对称性判断。

常见陷阱：

- “两个电子不能在同一轨道”说法不准确。它们可以在同一空间轨道，但自旋必须相反。

- Pauli 原理限制的是完整单电子态，不只是空间态。

## 能带题

若问能带来源：

1.  孤立原子有分立能级。

2.  $N$ 个原子靠近，波函数重叠。

3.  Pauli 原理和相互作用使每个原子能级分裂成 $N$ 个密集能级。

4.  大量密集能级形成能带。

5.  周期势场下 Bloch 定理给出态的形式，Kronig-Penney 模型展示允带/禁带。

若问导体、半导体、绝缘体：

- 看 Fermi 能级附近是否有可用空态。

- 禁带小则热激发可产生载流子，表现为半导体。

- 禁带大则常温下导电差。

# 教材例题精讲与自测

本章例题保留模型识别、计算步骤和容易错的地方。

## 基础例题

### 例题 1：无限深势阱的本征态、能量和零点能

**题目：**质量为 $m$ 的粒子处于一维无限深势阱 $0<x<a$ 中。求定态波函数、能级，并说明为什么基态能量不为零。

**解：**阱外势能无穷大，所以

``` math
\psi(0)=\psi(a)=0.
```

阱内 $V=0$，定态方程为

``` math
\frac{d^2\psi}{dx^2}+k^2\psi=0,\qquad k^2=\frac{2mE}{\hbar^2}.
```

通解为

``` math
\psi=A\sin kx+B\cos kx.
```

由 $\psi(0)=0$ 得 $B=0$；由 $\psi(a)=0$ 得 $\sin ka=0$，所以

``` math
k=\frac{n\pi}{a},\qquad n=1,2,\cdots.
```

于是

``` math
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2},
\qquad
\psi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a}.
```

**检查点：**不能取 $n=0$，因为此时波函数恒为零，不是物理态。基态能量

``` math
E_1=\frac{\pi^2\hbar^2}{2ma^2}
```

不为零，来自边界条件和不确定性关系：粒子被限制在宽度 $a$ 内，动量不可能同时精确为零。

### 例题 2：无限阱中叠加态的测量、平均能量和时间演化

**题目：**粒子在 $0<x<a$ 无限深势阱中，初态为

``` math
\Psi(x,0)=\frac{1}{2}\psi_1(x)+\frac{\sqrt3}{2}\psi_2(x).
```

求能量测量的可能结果、概率、平均能量；写出 $\Psi(x,t)$；若第一次测得 $E_2$，再测能量会怎样？

**解：**已按能量本征态展开，因此系数直接给概率：

``` math
P(E_1)=\left|\frac12\right|^2=\frac14,\qquad
P(E_2)=\left|\frac{\sqrt3}{2}\right|^2=\frac34.
```

平均能量为

``` math
\langle E\rangle=\frac14E_1+\frac34E_2
=\frac14E_1+\frac34(4E_1)=\frac{13}{4}E_1.
```

时间演化只给每个能量本征态乘相位：

``` math
\Psi(x,t)=\frac12\psi_1(x)e^{-iE_1t/\hbar}
+\frac{\sqrt3}{2}\psi_2(x)e^{-iE_2t/\hbar}.
```

若第一次测得 $E_2$，态坍缩为 $\psi_2$。紧接着再测能量必得 $E_2$，概率为 1。

**易错点：**时间相位不改变能量测量概率，但会改变位置概率密度，因为两项之间有相对相位。

### 例题 3：由三角恒等式快速展开初态

**题目：**无限深势阱 $0<x<a$ 中，初态

``` math
\Psi(x,0)=A\sin^3\frac{\pi x}{a}.
```

求归一化常数，并给出能量测量概率。

**解：**使用

``` math
\sin^3u=\frac{3\sin u-\sin 3u}{4}.
```

又

``` math
\psi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a},
```

所以

``` math
\Psi(x,0)=\frac{A}{4}\sqrt{\frac a2}\left(3\psi_1-\psi_3\right).
```

归一化要求展开系数模平方之和为 1：

``` math
\left(\frac{3A}{4}\sqrt{\frac a2}\right)^2
+\left(\frac{A}{4}\sqrt{\frac a2}\right)^2=1.
```

因此

``` math
\frac{10A^2a}{32}=1,\qquad
A=\frac{4}{\sqrt{5a}}.
```

展开系数为

``` math
c_1=\frac{3}{\sqrt{10}},\qquad c_3=-\frac{1}{\sqrt{10}}.
```

所以

``` math
P(E_1)=\frac9{10},\qquad P(E_3)=\frac1{10}.
```

**检查点：**不要把负号带进概率；负号影响后续干涉和位置概率密度，不影响能量概率。

### 例题 4：分段势场的边界条件

**题目：**粒子处于对称有限深势阱

``` math
V(x)=
\begin{cases}
-V_0,& |x|<a,\\
0,& |x|\ge a,
\end{cases}
```

其中束缚态满足 $-V_0<E<0$。写出偶宇称束缚态的能量方程。

**解：**阱内 $E-(-V_0)=E+V_0>0$，波函数振荡；阱外 $E-0<0$，波函数指数衰减。令

``` math
k=\frac{\sqrt{2m(E+V_0)}}{\hbar},\qquad
\kappa=\frac{\sqrt{-2mE}}{\hbar}.
```

偶宇称态可写为

``` math
\psi_{\rm in}=A\cos kx,\qquad |x|<a,
```

``` math
\psi_{\rm out}=Be^{-\kappa |x|},\qquad |x|\ge a.
```

在 $x=a$ 处要求 $\psi$ 和 $\psi'$ 连续：

``` math
A\cos ka=Be^{-\kappa a},
```

``` math
-Ak\sin ka=-\kappa Be^{-\kappa a}.
```

两式相除，得到偶宇称能量方程

``` math
k\tan(ka)=\kappa.
```

**检查点：**无限高壁处只要求 $\psi=0$；有限势垒边界处一般要求 $\psi$ 和 $\psi'$ 都连续。

### 例题 5：隧穿透射率的数量级

**题目：**电子被 $5\,\mathrm{V}$ 电压加速，入射到宽度 $a=0.8\,\mathrm{nm}$、高度约 $10\,\mathrm{eV}$ 的方势垒。估算透射率数量级。

**解：**电子动能约为

``` math
E=5\,\mathrm{eV},
```

势垒内的禁区能量差为

``` math
V_0-E=5\,\mathrm{eV}.
```

指数衰减常数

``` math
\kappa=\frac{\sqrt{2m_e(V_0-E)}}{\hbar}
\approx 5.12\sqrt{5}\ \mathrm{nm}^{-1}
\approx 11.45\ \mathrm{nm}^{-1}.
```

粗略透射率

``` math
T\sim e^{-2\kappa a}
=e^{-2\times 11.45\times0.8}
=e^{-18.3}
\approx 1.1\times10^{-8}.
```

**物理图像：**宽度只到纳米量级时，透射率仍可非零；但它对势垒宽度、高度和粒子质量呈指数敏感。

### 例题 6：算符测量的通用展开

**题目：**某力学量 $\hat A$ 有正交归一本征态 $\phi_1,\phi_2,\phi_3$，本征值分别为 $a,2a,4a$。体系态为

``` math
\psi=\frac{1}{\sqrt2}\phi_1+\frac{i}{2}\phi_2+\frac{1}{2}\phi_3.
```

求测量 $A$ 的可能值、概率和期望值。

**解：**直接读取展开系数：

``` math
P(a)=\frac12,\qquad
P(2a)=\left|\frac{i}{2}\right|^2=\frac14,\qquad
P(4a)=\frac14.
```

期望值

``` math
\langle A\rangle
=\frac12a+\frac14(2a)+\frac14(4a)
=2a.
```

**易错点：**系数 $i/2$ 的概率是 $1/4$，不是 $i/2$。概率永远是非负实数。

### 例题 7：位置、动量平均值和能量的关系

**题目：**粒子处于无限深势阱第 $n$ 个定态 $\psi_n(x)$。求 $\langle x\rangle,\langle p\rangle,\langle p^2\rangle$。

**解：**概率密度关于阱中心 $a/2$ 对称，因此

``` math
\langle x\rangle=\frac a2.
```

定态波函数可取实函数，且左右传播成分对称，所以

``` math
\langle p\rangle=0.
```

能量全是动能：

``` math
E_n=\frac{\langle p^2\rangle}{2m}.
```

于是

``` math
\langle p^2\rangle=2mE_n
=\frac{n^2\pi^2\hbar^2}{a^2}.
```

**检查点：**$\langle p\rangle=0$ 不代表动量测量一定为 0；无限阱定态不是动量本征态。

### 例题 8：自旋沿任意方向的测量

**题目：**电子自旋态为

``` math
|\mathbf n,+\rangle
=\cos\frac{\theta}{2}|z+\rangle
+e^{i\varphi}\sin\frac{\theta}{2}|z-\rangle.
```

若 $\theta=\pi/3$，求测量 $S_z$ 得到 $\pm\hbar/2$ 的概率和 $\langle S_z\rangle$。

**解：**在 $z$ 基底中系数已经给出：

``` math
P(z+)=\cos^2\frac{\pi}{6}=\frac34,
\qquad
P(z-)=\sin^2\frac{\pi}{6}=\frac14.
```

期望值

``` math
\langle S_z\rangle
=\frac34\frac{\hbar}{2}+\frac14\left(-\frac{\hbar}{2}\right)
=\frac{\hbar}{4}.
```

**检查点：**相位 $\varphi$ 不影响 $S_z$ 测量概率，但会影响 $S_x,S_y$ 的测量概率。

### 例题 9：连续 Stern–Gerlach 装置

**题目：**一束电子先通过 $z$ 方向 Stern–Gerlach 装置，只保留 $z+$ 支路；再通过 $x$ 方向装置，只保留 $x+$ 支路；最后测 $S_z$。求最后得到 $z+$ 和 $z-$ 的概率。

**解：**第一步保留 $z+$ 后，态为

``` math
|z+\rangle.
```

第二步测 $S_x$ 并保留 $x+$ 后，态坍缩为

``` math
|x+\rangle=\frac{|z+\rangle+|z-\rangle}{\sqrt2}.
```

最后测 $S_z$：

``` math
P(z+)=\frac12,\qquad P(z-)=\frac12.
```

**易错点：**不能认为“第一次已经选了 $z+$，最后就一定还是 $z+$”。中间的 $x$ 测量改变了态。

### 例题 10：磁场中自旋相对相位演化

**题目：**初态为

``` math
|x+\rangle=\frac{|z+\rangle+|z-\rangle}{\sqrt2}.
```

在沿 $z$ 方向均匀磁场中演化，设两能级相对角频率为 $\omega$，演化后态可写为

``` math
|\psi(t)\rangle=\frac{e^{-i\omega t/2}|z+\rangle+e^{i\omega t/2}|z-\rangle}{\sqrt2}.
```

求此时测得 $x+$ 的概率。

**解：**把 $|x+\rangle$ 写成 $z$ 基底，用内积求振幅：

``` math
\langle x+|\psi(t)\rangle
=\frac12\left(e^{-i\omega t/2}+e^{i\omega t/2}\right)
=\cos\frac{\omega t}{2}.
```

所以

``` math
P(x+)=\cos^2\frac{\omega t}{2}.
```

**检查点：**能量本征态各自只积累相位；相对相位在换到 $x$ 基底测量时变成可观测概率。

### 例题 11：原子态项、朗德因子和 SG 分裂

**题目：**某原子态为 ${}^3P_2$。求 $S,L,J$，朗德因子 $g_J$，弱磁场中可能的 $m_J$，以及 Stern–Gerlach 分裂条数。

**解：**项符号 ${}^{2S+1}L_J$ 中，多重度为 3：

``` math
2S+1=3\Rightarrow S=1.
```

$P$ 对应

``` math
L=1.
```

下标给出

``` math
J=2.
```

朗德因子

``` math
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}
=1+\frac{6+2-2}{12}
=\frac32.
```

磁量子数

``` math
m_J=-2,-1,0,1,2.
```

所以 SG 分裂条数为

``` math
2J+1=5.
```

弱磁场能级移动为

``` math
\Delta E=m_Jg_J\mu_BB.
```

**易错点：**$P$ 是 $L=1$，不是概率；${}^3P_2$ 的左上角 3 不是 $S=3$。

## 进阶例题

### 例题 12：黑体辐射的峰值和总辐射比较

**题目：**两个黑体温度分别为 $T$ 和 $2T$。比较峰值波长和总辐射本领。

**解：**Wien 位移定律：

``` math
\lambda_mT=b.
```

温度变为 $2T$ 时，

``` math
\lambda_m'=\frac{b}{2T}=\frac12\lambda_m.
```

Stefan–Boltzmann 定律：

``` math
M=\sigma T^4.
```

所以

``` math
\frac{M'}{M}=\frac{\sigma(2T)^4}{\sigma T^4}=16.
```

**物理图像：**升温会使谱峰向短波移动，并使总辐射迅速增强。

### 例题 13：光电效应中的截止频率和遏止电压

**题目：**某金属逸出功 $A=2.0\,\mathrm{eV}$。用波长 $400\,\mathrm{nm}$ 的光照射，取 $hc=1240\,\mathrm{eV\,nm}$。求最大光电子动能和遏止电压。若光强加倍，最大动能是否改变？

**解：**光子能量

``` math
h\nu=\frac{hc}{\lambda}
=\frac{1240}{400}\,\mathrm{eV}
=3.10\,\mathrm{eV}.
```

最大动能

``` math
K_{\max}=h\nu-A=1.10\,\mathrm{eV}.
```

遏止电压由 $eV_0=K_{\max}$ 得

``` math
V_0=1.10\,\mathrm{V}.
```

光强加倍只增加光电子数和饱和电流，不改变单个光子的能量，所以最大动能不变。

### 例题 14：Compton 散射的能量转移

**题目：**波长 $\lambda=0.071\,\mathrm{nm}$ 的 X 射线被电子散射，散射角 $\theta=90^\circ$。取电子 Compton 波长 $\lambda_C=0.00243\,\mathrm{nm}$，$hc=1240\,\mathrm{eV\,nm}$。求散射后波长和电子获得的动能。

**解：**Compton 位移

``` math
\Delta\lambda=\lambda_C(1-\cos\theta)=0.00243\,\mathrm{nm}.
```

散射后波长

``` math
\lambda'=0.071+0.00243=0.07343\,\mathrm{nm}.
```

入射光子能量

``` math
E=\frac{1240}{0.071}\,\mathrm{eV}\approx 17.46\,\mathrm{keV}.
```

散射后光子能量

``` math
E'=\frac{1240}{0.07343}\,\mathrm{eV}\approx 16.89\,\mathrm{keV}.
```

电子获得动能

``` math
K_e=E-E'\approx0.57\,\mathrm{keV}.
```

**易错点：**Compton 位移只由散射角决定，不由入射波长决定；但能量转移还要用新波长计算。

### 例题 15：de Broglie 波长和不确定性估算

**题目：**电子经 $150\,\mathrm{V}$ 电压加速，估算其 de Broglie 波长。再估算若电子被限制在 $\Delta x=0.10\,\mathrm{nm}$ 范围内，速度不确定量至少多大。

**解：**非相对论下

``` math
\lambda=\frac{h}{p}=\frac{h}{\sqrt{2m_eeV}}.
```

常用近似

``` math
\lambda(\mathrm{nm})\approx\frac{1.226}{\sqrt{V(\mathrm{V})}}.
```

因此

``` math
\lambda\approx\frac{1.226}{\sqrt{150}}\,\mathrm{nm}\approx0.100\,\mathrm{nm}.
```

不确定关系

``` math
\Delta x\,\Delta p\ge\frac{\hbar}{2}
```

给出

``` math
\Delta v\ge \frac{\hbar}{2m_e\Delta x}
\approx
\frac{1.055\times10^{-34}}
{2(9.11\times10^{-31})(1.0\times10^{-10})}
\approx5.8\times10^5\,\mathrm{m/s}.
```

**物理图像：**位置压得越窄，动量和速度的不确定越大。

### 例题 16：谐振子能级、零点能和宇称

**题目：**一维谐振子频率为 $\omega$。求基态和第一激发态能量；若态为

``` math
\psi=\frac{1}{\sqrt2}(\phi_0+\phi_1),
```

求能量测量概率，并判断宇称是否确定。

**解：**能级为

``` math
E_n=\left(n+\frac12\right)\hbar\omega.
```

所以

``` math
E_0=\frac12\hbar\omega,\qquad
E_1=\frac32\hbar\omega.
```

态已按能量本征态展开：

``` math
P(E_0)=\frac12,\qquad P(E_1)=\frac12.
```

谐振子 $\phi_n$ 的宇称为 $(-1)^n$：$\phi_0$ 偶，$\phi_1$ 奇。二者叠加后不是宇称本征态，因此宇称不确定。

### 例题 17：氢原子量子数和简并度

**题目：**氢原子 $n=3$ 能级中，允许哪些 $l,m$？不计自旋简并度是多少？计入电子自旋是多少？能量是多少？

**解：**给定 $n=3$，

``` math
l=0,1,2.
```

各 $l$ 对应

``` math
l=0:\ m=0,
```

``` math
l=1:\ m=-1,0,1,
```

``` math
l=2:\ m=-2,-1,0,1,2.
```

不计自旋总数

``` math
1+3+5=9=n^2.
```

计入电子自旋，每个空间态有 $m_s=\pm1/2$ 两种：

``` math
2n^2=18.
```

氢原子能级只依赖 $n$：

``` math
E_3=-\frac{13.6\,\mathrm{eV}}{9}\approx -1.51\,\mathrm{eV}.
```

**检查点：**$l$ 最大只能到 $n-1$；$m$ 不是从 $0$ 到 $l$，而是从 $-l$ 到 $l$。

### 例题 18：角动量量子数不是角动量本身

**题目：**若粒子处于 $l=2,m=-1$ 的轨道角动量共同本征态，求 $L^2$ 和 $L_z$ 的测量值，并列出同一 $l$ 下所有可能 $m$。

**解：**

``` math
L^2=l(l+1)\hbar^2=2\times3\hbar^2=6\hbar^2.
```

``` math
L_z=m\hbar=-\hbar.
```

同一 $l=2$ 下

``` math
m=-2,-1,0,1,2.
```

共有 $2l+1=5$ 个 $L_z$ 投影。

### 例题 19：单电子自旋轨道耦合的 $j$ 值

**题目：**一个价电子处于 $p$ 轨道，$l=1$，电子自旋 $s=1/2$。总角动量 $j$ 可取哪些值？对应项符号如何写？

**解：**角动量相加规则：

``` math
j=|l-s|,\ |l-s|+1,\cdots,l+s.
```

所以

``` math
j=\frac12,\frac32.
```

因为单电子 $S=1/2$，多重度

``` math
2S+1=2.
```

$l=1$ 记为 $P$，所以项符号为

``` math
{}^2P_{1/2},\qquad {}^2P_{3/2}.
```

这就是碱金属双线常见的角动量来源。

### 例题 20：Pauli 原理和同科 p 电子态项

**题目：**两个同科 $p$ 电子可耦合出总轨道角动量 $L=2,1,0$，总自旋 $S=1,0$。教材中给出同科电子选择规则 $L+S$ 为偶数时允许。列出允许的原子态项。

**解：**$p^2$ 中可能字母为

``` math
L=2,1,0\quad \Longleftrightarrow\quad D,P,S.
```

逐个检查 $L+S$：

- $L=2,S=0$：$L+S=2$，允许，项为 ${}^1D$。

- $L=1,S=1$：$L+S=2$，允许，项为 ${}^3P$。

- $L=0,S=0$：$L+S=0$，允许，项为 ${}^1S$。

所以允许项为

``` math
{}^1D,\qquad {}^3P,\qquad {}^1S.
```

**检查点：**这是同科电子的交换对称性限制；不要把所有形式上能耦合出的 $L,S$ 都直接当成允许项。

## 概念例题

### 例题 21：电子组态和最大容纳数

**题目：**一个 $d$ 子壳层最多容纳多少个电子？为什么同一空间轨道最多两个电子？

**解：**$d$ 子壳层 $l=2$，所以

``` math
m_l=-2,-1,0,1,2
```

共有 $2l+1=5$ 个空间轨道。每个空间轨道可有两个自旋：

``` math
m_s=+\frac12,\ -\frac12.
```

因此最多容纳

``` math
2(2l+1)=10
```

个电子。同一空间轨道最多两个电子，是因为若 $n,l,m_l$ 相同，则两个电子必须取相反 $m_s$，否则四个量子数完全相同，违反 Pauli 不相容原理。

### 例题 22：能带分类和掺杂判断

**题目：**判断下列材料类型：材料 A 的价带已满、导带空，禁带很大；材料 B 的禁带较小；材料 C 的 Fermi 能级穿过能带。若在硅中掺入五价杂质，形成何种半导体？

**解：**

- 材料 A：绝缘体，常温下电子难以跨越大禁带。

- 材料 B：半导体，热激发可产生电子和空穴。

- 材料 C：导体，Fermi 能级附近有可用空态。

- 五价杂质多一个价电子，提供施主能级，形成 n 型半导体，多数载流子为电子。

### 例题 23：Bloch 定理的概念判断

**题目：**周期势 $V(x+a)=V(x)$ 中，电子本征态写成

``` math
\psi_k(x)=e^{ikx}u_k(x),\qquad u_k(x+a)=u_k(x).
```

这是否说明电子完全自由？$k$ 和能带有什么关系？

**解：**不说明电子完全自由。$e^{ikx}$ 像平面波，但 $u_k(x)$ 仍带有晶格周期调制，反映电子受到周期势影响。$k$ 是准动量标记，允许能量随 $k$ 形成 $E(k)$；周期势和边界条件使某些能量范围允许，某些范围禁阻，于是出现允带和禁带。

### 例题 24：量子信息边缘概念

**题目：**双比特态

``` math
|\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2}
```

是否可写成两个单比特态的直积？测量第一个比特得到 0 的概率是多少？

**解：**该态是 Bell 态，不能写成

``` math
|\phi\rangle_A\otimes|\chi\rangle_B
```

的形式，因此是纠缠态。第一个比特测得 0 的概率为

``` math
P(0)=\frac12.
```

若第一个比特测得 0，第二个比特也随之确定为 0；若第一个测得 1，第二个也为 1。

**注意：**这类题在只作为概念识别。

## 覆盖式补充例题：补齐易漏变式

### 例题 25：归一化、区域概率和平均位置

**题目：**粒子在 $0<x<a$ 中的波函数为

``` math
\psi(x)=Ax(a-x),\qquad 0<x<a,
```

区间外为零。求 $A$，并求粒子在 $0<x<a/2$ 中的概率和 $\langle x\rangle$。

**解：**归一化要求

``` math
1=A^2\int_0^a x^2(a-x)^2\,dx.
```

积分

``` math
\int_0^a x^2(a-x)^2\,dx=\frac{a^5}{30},
```

所以

``` math
A=\sqrt{\frac{30}{a^5}}.
```

由于 $x(a-x)$ 关于 $a/2$ 对称，概率密度也关于 $a/2$ 对称，因此

``` math
P(0<x<a/2)=\frac12,\qquad \langle x\rangle=\frac a2.
```

**检查点：**先归一化再谈概率；对称性可以节省大量积分。

### 例题 26：简并测量后的坍缩

**题目：**$\hat A$ 有三个正交归一本征态 $\phi_1,\phi_2,\phi_3$，其中 $\phi_1,\phi_2$ 对应同一本征值 $a$，$\phi_3$ 对应本征值 $b$。若

``` math
\psi=\frac{1}{\sqrt3}(\phi_1+\phi_2+\phi_3),
```

求测得 $a$ 的概率和测得 $a$ 后的归一化状态。

**解：**测得 $a$ 的概率是落入对应本征子空间的总概率：

``` math
P(a)=\left|\frac1{\sqrt3}\right|^2+\left|\frac1{\sqrt3}\right|^2=\frac23.
```

测得 $a$ 后，态不是随机选 $\phi_1$ 或 $\phi_2$，而是投影到 $a$ 的本征子空间并归一化：

``` math
\psi_a=\frac{\phi_1+\phi_2}{\sqrt2}.
```

**易错点：**非简并测量坍缩到一个本征态；简并测量坍缩到对应本征子空间。

### 例题 27：Frank–Hertz 实验和激发能

**题目：**某原子 Frank–Hertz 实验中收集电流第一次明显下降出现在加速电压 $4.9\,\mathrm{V}$ 附近。求原子第一激发能；若随后退激发辐射光子，估算波长。取 $hc=1240\,\mathrm{eV\,nm}$。

**解：**电子通过电压 $V$ 获得动能 $eV$。第一次非弹性碰撞说明电子刚好能激发原子：

``` math
\Delta E=4.9\,\mathrm{eV}.
```

辐射光子能量若等于该激发能，则

``` math
\lambda=\frac{hc}{\Delta E}
=\frac{1240}{4.9}\,\mathrm{nm}
\approx253\,\mathrm{nm}.
```

**物理图像：**电流周期性下降不是仪器故障，而是原子只能吸收分立能量的证据。

### 例题 28：类氢离子跃迁能量

**题目：**求 $\mathrm{He}^+$ 离子从 $n=2$ 跃迁到 $n=1$ 发出的光子能量。

**解：**类氢离子能级

``` math
E_n=-\frac{13.6 Z^2}{n^2}\,\mathrm{eV}.
```

对 $\mathrm{He}^+$，$Z=2$。光子能量

``` math
h\nu=E_2-E_1
=-13.6\times4\left(\frac14\right)-\left[-13.6\times4\right].
```

因此

``` math
h\nu=13.6\times4\left(1-\frac14\right)
=40.8\,\mathrm{eV}.
```

**检查点：**氢原子的 $13.6\,\mathrm{eV}$ 要乘 $Z^2$；跃迁光子能量取高能级减低能级。

### 例题 29：有限深势阱的奇宇称方程

**题目：**仍考虑

``` math
V(x)=
\begin{cases}
-V_0,& |x|<a,\\
0,& |x|\ge a,
\end{cases}
\qquad -V_0<E<0.
```

写出奇宇称束缚态的能量方程。

**解：**奇宇称态在阱内取

``` math
\psi_{\rm in}=A\sin kx.
```

阱外为了保持奇宇称和无穷远衰减，可在 $x>a$ 写作

``` math
\psi_{\rm out}=Be^{-\kappa x}.
```

仍有

``` math
k=\frac{\sqrt{2m(E+V_0)}}{\hbar},\qquad
\kappa=\frac{\sqrt{-2mE}}{\hbar}.
```

在 $x=a$ 处连续：

``` math
A\sin ka=Be^{-\kappa a},
```

``` math
Ak\cos ka=-\kappa Be^{-\kappa a}.
```

两式相除：

``` math
k\cot(ka)=-\kappa,
```

即

``` math
-k\cot(ka)=\kappa.
```

**检查点：**偶解用 $\cos$，奇解用 $\sin$；不要把两个超越方程混用。

### 例题 30：势阶散射中的概率流因子

**题目：**粒子从左入射到势阶

``` math
V(x)=
\begin{cases}
0,& x<0,\\
V_0,& x>0,
\end{cases}
\qquad E>V_0.
```

求反射率和透射率。令 $k_1=\sqrt{2mE}/\hbar$，$k_2=\sqrt{2m(E-V_0)}/\hbar$。

**解：**两侧波函数写为

``` math
\psi_1=Ae^{ik_1x}+Be^{-ik_1x},\qquad x<0,
```

``` math
\psi_2=Ce^{ik_2x},\qquad x>0.
```

在 $x=0$ 处 $\psi,\psi'$ 连续：

``` math
A+B=C,\qquad k_1(A-B)=k_2C.
```

解得振幅反射系数

``` math
r=\frac{B}{A}=\frac{k_1-k_2}{k_1+k_2},
```

振幅透射系数

``` math
t=\frac{C}{A}=\frac{2k_1}{k_1+k_2}.
```

反射率

``` math
R=|r|^2=\left(\frac{k_1-k_2}{k_1+k_2}\right)^2.
```

透射率要乘概率流因子：

``` math
T=\frac{k_2}{k_1}|t|^2
=\frac{4k_1k_2}{(k_1+k_2)^2}.
```

可验证

``` math
R+T=1.
```

**易错点：**若左右波数不同，$T$ 不是单纯 $|C/A|^2$。

### 例题 31：对易子和不确定关系

**题目：**证明 $[\hat x,\hat p_x]=i\hbar$，并求 $[\hat x,\hat p_x^2]$。

**解：**令算符作用在任意函数 $f(x)$ 上：

``` math
[\hat x,\hat p_x]f
=x(-i\hbar f')-[-i\hbar(xf)'].
```

展开第二项：

``` math
-i\hbar(xf)'=-i\hbar(f+xf').
```

因此

``` math
[\hat x,\hat p_x]f
=-i\hbar xf'+i\hbar f+i\hbar xf'
=i\hbar f.
```

所以

``` math
[\hat x,\hat p_x]=i\hbar.
```

再用

``` math
[A,BC]=[A,B]C+B[A,C],
```

得

``` math
[\hat x,\hat p_x^2]
=[\hat x,\hat p_x]\hat p_x+\hat p_x[\hat x,\hat p_x]
=2i\hbar\hat p_x.
```

**物理意义：**$x$ 与 $p_x$ 不对易，所以不能同时精确确定，给出 $\Delta x\Delta p_x\ge\hbar/2$。

### 例题 32：厄米算符本征函数正交性

**题目：**$\hat A$ 为厄米算符，$\hat A\phi_m=a_m\phi_m$，$\hat A\phi_n=a_n\phi_n$，且 $a_m\ne a_n$。证明 $\phi_m,\phi_n$ 正交。

**解：**厄米性给出

``` math
\langle \phi_m|\hat A\phi_n\rangle
=\langle \hat A\phi_m|\phi_n\rangle.
```

代入本征方程：

``` math
a_n\langle\phi_m|\phi_n\rangle
=a_m\langle\phi_m|\phi_n\rangle.
```

整理：

``` math
(a_n-a_m)\langle\phi_m|\phi_n\rangle=0.
```

由于 $a_n\ne a_m$，

``` math
\langle\phi_m|\phi_n\rangle=0.
```

**检查点：**正交性依赖厄米性和本征值不同；简并本征态可通过线性组合选成正交。

### 例题 33：自旋矩阵本征态和期望值

**题目：**在 $z$ 基底中

``` math
|\psi\rangle=\frac{1}{\sqrt2}
\begin{pmatrix}
1\\ i
\end{pmatrix}.
```

判断它是不是 $S_y$ 的本征态，并求测量 $S_x$ 的概率。

**解：**$S_y=(\hbar/2)\sigma_y$，其中

``` math
\sigma_y=
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix}.
```

作用到该态：

``` math
\sigma_y\frac1{\sqrt2}
\begin{pmatrix}
1\\ i
\end{pmatrix}
=\frac1{\sqrt2}
\begin{pmatrix}
1\\ i
\end{pmatrix}.
```

所以它是 $S_y=+\hbar/2$ 的本征态。

$S_x$ 本征态为

``` math
|x+\rangle=\frac1{\sqrt2}
\begin{pmatrix}
1\\1
\end{pmatrix},
\qquad
|x-\rangle=\frac1{\sqrt2}
\begin{pmatrix}
1\\-1
\end{pmatrix}.
```

振幅

``` math
\langle x+|\psi\rangle=\frac{1+i}{2},\qquad
\langle x-|\psi\rangle=\frac{1-i}{2}.
```

概率

``` math
P(x+)=P(x-)=\frac12.
```

### 例题 34：由 spinor 直接算平均自旋

**题目：**若

``` math
|\psi\rangle=
\begin{pmatrix}
\alpha\\ \beta
\end{pmatrix},
\qquad |\alpha|^2+|\beta|^2=1,
```

写出 $\langle S_x\rangle,\langle S_y\rangle,\langle S_z\rangle$。

**解：**

``` math
\langle S_i\rangle=\frac{\hbar}{2}\langle\sigma_i\rangle.
```

直接矩阵相乘可得

``` math
\langle\sigma_x\rangle=\alpha^*\beta+\beta^*\alpha
=2\operatorname{Re}(\alpha^*\beta),
```

``` math
\langle\sigma_y\rangle=-i\alpha^*\beta+i\beta^*\alpha
=2\operatorname{Im}(\alpha^*\beta),
```

``` math
\langle\sigma_z\rangle=|\alpha|^2-|\beta|^2.
```

因此

``` math
\langle S_x\rangle=\hbar\operatorname{Re}(\alpha^*\beta),
```

``` math
\langle S_y\rangle=\hbar\operatorname{Im}(\alpha^*\beta),
```

``` math
\langle S_z\rangle=\frac{\hbar}{2}(|\alpha|^2-|\beta|^2).
```

**检查点：**平均值可以是连续变化的实数；测量值仍只能是 $\pm\hbar/2$。

### 例题 35：Hund 规则判断 $p^2$ 基态

**题目：**已知同科 $p^2$ 电子允许项为 ${}^3P,{}^1D,{}^1S$。用 Hund 规则判断基态项。

**解：**Hund 第一规则：同一组态中总自旋 $S$ 越大能量越低。三重态 ${}^3P$ 有

``` math
2S+1=3\Rightarrow S=1,
```

而单态 $S=0$，所以先选 ${}^3P$。

$p$ 子壳最多 6 个电子，$p^2$ 不到半满。Hund 第三规则：不到半满时，最小 $J$ 最低。对 ${}^3P$，

``` math
L=1,\qquad S=1,\qquad J=0,1,2.
```

所以基态项为

``` math
{}^3P_0.
```

**注意：**Hund 规则在本课不要求推导，只需会用来做定性判断。

### 例题 36：两电子空间对称性和自旋态

**题目：**两个电子的空间波函数若为对称函数，总自旋态应为单态还是三重态？写出对应自旋波函数。

**解：**电子是费米子，总波函数交换两个电子后必须反对称。若空间部分对称，则自旋部分必须反对称。因此是单态

``` math
\chi_{00}=\frac{1}{\sqrt2}
\left(\alpha(1)\beta(2)-\beta(1)\alpha(2)\right).
```

**检查点：**三重态自旋部分是对称的，必须配反对称空间部分。

### 例题 37：有效质量和介电常数修正的类氢模型

**题目：**半导体中浅施主杂质可近似看成“类氢原子”，但电子质量换成有效质量 $m^*$，库仑作用被相对介电常数 $\varepsilon_r$ 削弱。写出基态束缚能和 Bohr 半径的修正。若 $m^*/m_e=0.26$，$\varepsilon_r=11.7$，估算束缚能。

**解：**类氢能级按

``` math
E_1^*=-13.6\,\mathrm{eV}\,\frac{m^*}{m_e}\frac{1}{\varepsilon_r^2}
```

缩放。有效 Bohr 半径按

``` math
a_0^*=\varepsilon_r\frac{m_e}{m^*}a_0
```

放大。

代入数值：

``` math
|E_1^*|=13.6\,\mathrm{eV}\times\frac{0.26}{11.7^2}
\approx0.0258\,\mathrm{eV}.
```

即约

``` math
25.8\,\mathrm{meV}.
```

**物理图像：**半导体中杂质电子束缚很弱、半径很大，所以较容易热激发成载流子。

### 例题 38：PN 结正反偏判断

**题目：**PN 结中，为什么正向偏置容易导通，反向偏置电流很小？

**解：**PN 结形成后，交界处电子和空穴扩散复合，留下空间电荷区和内建电场。正向偏置降低势垒，空间电荷区变窄，多数载流子容易跨过结区，电流大。反向偏置提高势垒，空间电荷区变宽，多数载流子被阻挡，只剩少数载流子漂移电流，电流很小。

**写法：**正偏降势垒、反偏升势垒；正偏多数载流子导电，反偏少数载流子电流小。

## 综合大题详解

### 综合题 1：无限深势阱中的完整展开和平均能量

**题目：**粒子处于 $0<x<a$ 无限深势阱中，初态为

``` math
\Psi(x,0)=Ax(a-x).
```

求：归一化常数；展开系数 $c_n$；能量测量概率；平均能量；写出含时波函数。

**解：**第一步归一化：

``` math
1=A^2\int_0^a x^2(a-x)^2\,dx
=A^2\frac{a^5}{30}.
```

所以

``` math
A=\sqrt{\frac{30}{a^5}}.
```

无限深势阱本征态为

``` math
\psi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a},\qquad
E_n=n^2E_1,\qquad
E_1=\frac{\pi^2\hbar^2}{2ma^2}.
```

展开系数

``` math
c_n=\int_0^a\psi_n(x)\Psi(x,0)\,dx.
```

代入并令 $y=x/a$：

``` math
c_n=\sqrt{\frac2a}\sqrt{\frac{30}{a^5}}a^3
\int_0^1y(1-y)\sin(n\pi y)\,dy.
```

其中

``` math
\int_0^1y(1-y)\sin(n\pi y)\,dy
=\frac{2[1-(-1)^n]}{(n\pi)^3}.
```

所以

``` math
c_n=\frac{2\sqrt{60}[1-(-1)^n]}{(n\pi)^3}.
```

这说明偶数 $n$ 的系数为零；奇数 $n$ 时

``` math
c_n=\frac{4\sqrt{60}}{(n\pi)^3},\qquad n=1,3,5,\cdots.
```

能量测量概率

``` math
P(E_n)=|c_n|^2
=
\begin{cases}
\dfrac{960}{n^6\pi^6},& n\ \text{为奇数},\\[0.8em]
0,& n\ \text{为偶数}.
\end{cases}
```

平均能量可用本征展开求：

``` math
\langle E\rangle=\sum_{n=1}^{\infty}|c_n|^2E_n
=E_1\frac{960}{\pi^6}\sum_{n\ {\rm odd}}\frac{1}{n^4}.
```

利用

``` math
\sum_{n\ {\rm odd}}\frac{1}{n^4}=\frac{\pi^4}{96},
```

得到

``` math
\langle E\rangle=\frac{10}{\pi^2}E_1.
```

含时波函数为

``` math
\Psi(x,t)=\sum_{n=1}^{\infty}c_n\psi_n(x)e^{-iE_nt/\hbar},
```

其中只有奇数 $n$ 项非零。

**关键点：**这题的关键不是积分技巧，而是先认出“无限阱完备展开”。偶数项消失来自初态关于 $a/2$ 对称，只能展开到同样对称的本征态。

### 综合题 2：分段势场的完整定解流程

**题目：**粒子处于势能

``` math
V(x)=
\begin{cases}
\infty,& x<0,\\
0,& 0<x<a,\\
V_0,& x>a,
\end{cases}
```

讨论 $0<E<V_0$ 的束缚态。写出各区域波函数、边界条件和能量方程。

**解：**先分区判断：

- $x<0$ 为无限高壁，波函数为零。

- $0<x<a$ 中 $E>V=0$，波函数振荡。

- $x>a$ 中 $E<V_0$，波函数指数衰减。

因此

``` math
\psi_I=0,\qquad x<0,
```

``` math
\psi_{II}=A\sin kx+B\cos kx,\qquad 0<x<a,
```

``` math
\psi_{III}=Ce^{-\kappa(x-a)},\qquad x>a,
```

其中

``` math
k=\frac{\sqrt{2mE}}{\hbar},\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
```

无限高壁在 $x=0$ 给出

``` math
\psi(0)=0,
```

所以 $B=0$，阱内为

``` math
\psi_{II}=A\sin kx.
```

在有限边界 $x=a$ 处要求 $\psi,\psi'$ 连续：

``` math
A\sin ka=C,
```

``` math
Ak\cos ka=-\kappa C.
```

两式相除：

``` math
k\cot(ka)=-\kappa.
```

这就是能量方程：

``` math
-k\cot(ka)=\kappa.
```

**关键点：**这题很像有限阱奇宇称方程，但物理图像不同：左边是无限墙，右边是有限墙。不要机械套对称有限阱的奇偶性，先画势能图。

### 综合题 3：势垒透射的精确公式与近似

**题目：**粒子从左入射方势垒

``` math
V(x)=
\begin{cases}
0,& x<0,\\
V_0,& 0<x<a,\\
0,& x>a.
\end{cases}
```

当 $E<V_0$ 时，写出透射率的标准结果，并说明厚势垒极限下为什么有指数衰减。

**解：**三区波函数形式为

``` math
\psi_I=Ae^{ikx}+Be^{-ikx},
```

``` math
\psi_{II}=Ce^{\kappa x}+De^{-\kappa x},
```

``` math
\psi_{III}=Fe^{ikx},
```

其中

``` math
k=\frac{\sqrt{2mE}}{\hbar},\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
```

在 $x=0,a$ 处分别要求 $\psi,\psi'$ 连续，解线性方程组可得透射率

``` math
T=\left[
1+\frac{V_0^2\sinh^2(\kappa a)}
{4E(V_0-E)}
\right]^{-1}.
```

若 $\kappa a\gg1$，

``` math
\sinh(\kappa a)\approx\frac12e^{\kappa a}.
```

于是透射率主导行为为

``` math
T\propto e^{-2\kappa a}.
```

**写法：**若题目只要求定性或数量级，写 $T\sim e^{-2\kappa a}$ 并说明 $\kappa=\sqrt{2m(V_0-E)}/\hbar$ 即可；若要求“标准公式”，再写上完整 $T$。

### 综合题 4：二维矩阵表象中的测量

**题目：**在 $z$ 基底 $\{|z+\rangle,|z-\rangle\}$ 中，某力学量算符为

``` math
\hat A=a
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}.
```

体系初态为

``` math
|\psi\rangle=
\begin{pmatrix}
\cos(\theta/2)\\
\sin(\theta/2)
\end{pmatrix}.
```

求 $\hat A$ 的可能测量值、对应概率和期望值。

**解：**矩阵就是

``` math
\hat A=a\sigma_x.
```

本征值为

``` math
a_+=a,\qquad a_-=-a.
```

对应归一本征态

``` math
|a+\rangle=|x+\rangle=\frac1{\sqrt2}
\begin{pmatrix}
1\\1
\end{pmatrix},
```

``` math
|a-\rangle=|x-\rangle=\frac1{\sqrt2}
\begin{pmatrix}
1\\-1
\end{pmatrix}.
```

概率振幅为

``` math
\langle x+|\psi\rangle
=\frac{1}{\sqrt2}\left(\cos\frac\theta2+\sin\frac\theta2\right),
```

``` math
\langle x-|\psi\rangle
=\frac{1}{\sqrt2}\left(\cos\frac\theta2-\sin\frac\theta2\right).
```

所以

``` math
P(a)=\frac12\left(1+\sin\theta\right),
```

``` math
P(-a)=\frac12\left(1-\sin\theta\right).
```

期望值

``` math
\langle A\rangle=aP(a)-aP(-a)=a\sin\theta.
```

**检查点：**先求算符本征态，再把初态投影过去。不要直接把矩阵对角元素当成测量值。

### 综合题 5：连续 SG、选择路径和总通过率

**题目：**未偏振电子束先通过 $z$ 方向 SG 装置，只保留 $z+$ 支路；再通过方向 $\mathbf n$ 的 SG 装置，只保留 $\mathbf n+$ 支路；最后通过 $z$ 方向 SG 装置，只保留 $z+$ 支路。设 $\mathbf n$ 与 $z$ 轴夹角为 $\theta$。求相对于原始入射束，最后通过的比例。

**解：**未偏振电子束第一次通过 $z$ 装置，保留 $z+$，比例为

``` math
\frac12.
```

此时态为 $|z+\rangle$。第二个装置保留 $|\mathbf n+\rangle$。由于

``` math
|\mathbf n+\rangle
=\cos\frac\theta2|z+\rangle+\sin\frac\theta2|z-\rangle
```

可取 $\varphi=0$ 不影响本题概率，所以

``` math
P(z+\to n+)=|\langle \mathbf n+|z+\rangle|^2
=\cos^2\frac\theta2.
```

保留 $\mathbf n+$ 后，态坍缩为 $|\mathbf n+\rangle$。最后测 $z+$ 的概率

``` math
P(n+\to z+)=|\langle z+|\mathbf n+\rangle|^2
=\cos^2\frac\theta2.
```

因此总通过比例

``` math
P_{\rm total}
=\frac12\cos^2\frac\theta2\cos^2\frac\theta2
=\frac12\cos^4\frac\theta2.
```

**关键点：**每经过一次选择路径，态都被重新制备。连续 SG 题的核心不是“记公式”，而是每一步重置初态。

### 综合题 6：自旋进动后的测量概率

**题目：**电子初态为 $|x+\rangle$。在沿 $z$ 方向磁场中演化时间 $t$ 后，态为

``` math
|\psi(t)\rangle=
\frac{e^{i\omega t/2}|z+\rangle
+e^{-i\omega t/2}|z-\rangle}{\sqrt2}.
```

求测量 $S_x$ 和 $S_y$ 的概率分布。

**解：**先测 $S_x$。有

``` math
|x+\rangle=\frac{|z+\rangle+|z-\rangle}{\sqrt2},
\qquad
|x-\rangle=\frac{|z+\rangle-|z-\rangle}{\sqrt2}.
```

振幅

``` math
\langle x+|\psi(t)\rangle
=\frac12(e^{i\omega t/2}+e^{-i\omega t/2})
=\cos\frac{\omega t}{2}.
```

所以

``` math
P(x+)=\cos^2\frac{\omega t}{2},\qquad
P(x-)=\sin^2\frac{\omega t}{2}.
```

再测 $S_y$。有

``` math
|y+\rangle=\frac{|z+\rangle+i|z-\rangle}{\sqrt2},
\qquad
|y-\rangle=\frac{|z+\rangle-i|z-\rangle}{\sqrt2}.
```

于是

``` math
\langle y+|\psi(t)\rangle
=\frac12(e^{i\omega t/2}-ie^{-i\omega t/2}).
```

取模平方可得

``` math
P(y+)=\frac12(1-\sin\omega t),
```

``` math
P(y-)=\frac12(1+\sin\omega t).
```

**检查点：**若你对 $|y+\rangle$ 的相位约定不同，$P(y+)$ 与 $P(y-)$ 的符号可能互换；只要和本征态定义自洽即可。

### 综合题 7：LS 耦合、Hund 规则、朗德因子一题通

**题目：**考虑两个同科 $p$ 电子。已知允许项为 ${}^3P,{}^1D,{}^1S$。求 Hund 规则下基态项；再对激发项 ${}^3P_2$ 求 $g_J$、磁场中能级分裂数和相邻能级间隔。

**解：**先判基态。Hund 第一规则要求 $S$ 尽量大，所以三重态 ${}^3P$ 低于单态。对 ${}^3P$，

``` math
S=1,\qquad L=1.
```

$p^2$ 不到半满，Hund 第三规则取最小 $J$：

``` math
J=|L-S|=0.
```

所以基态项为

``` math
{}^3P_0.
```

再看 ${}^3P_2$：

``` math
S=1,\qquad L=1,\qquad J=2.
```

朗德因子

``` math
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
```

代入

``` math
g_J=1+\frac{6+2-2}{12}=\frac32.
```

$m_J$ 可取

``` math
-2,-1,0,1,2,
```

所以分裂数为

``` math
2J+1=5.
```

弱磁场能级移动

``` math
\Delta E=m_Jg_J\mu_BB.
```

相邻 $m_J$ 差 1，所以相邻能级间隔

``` math
\Delta E_{\rm adjacent}=g_J\mu_BB=\frac32\mu_BB.
```

**关键点：**项符号题一定先把 ${}^{2S+1}L_J$ 翻译成 $S,L,J$，再套公式。

### 综合题 8：氢原子、选择规则和谱线条数

**题目：**氢原子电子从 $n=3$ 能级向低能级跃迁。若只考虑电偶极选择规则 $\Delta l=\pm1$，列出 $n=3$ 中各子层可能向下跃迁的终态类型，并说明为什么 Bohr 模型只看 $n$ 不够。

**解：**$n=3$ 中

``` math
l=0,1,2,
```

即

``` math
3s,\quad 3p,\quad 3d.
```

低能级包括 $n=2$ 的

``` math
2s,\quad 2p,
```

以及 $n=1$ 的

``` math
1s.
```

按 $\Delta l=\pm1$：

- $3s(l=0)$ 可到 $2p(l=1)$。

- $3p(l=1)$ 可到 $2s(l=0)$ 或 $1s(l=0)$。

- $3d(l=2)$ 可到 $2p(l=1)$。

Bohr 模型只给 $E_n$，能解释主要谱线频率，却不能说明 $l,m$ 子层、选择规则、谱线强度和精细结构。因此现代量子力学必须用波函数、角动量和自旋来描述。

**注意：**本课程通常不要求详细谱线强度计算，但要知道选择规则和量子数比 Bohr 模型更精细。

## 选择填空快问快答

这一页用于最后检查概念盲区。每条都可以改成选择题、填空题或判断题。

| 问题 | 标准回答 |
|:---|:---|
| 问题 | 标准回答 |
| 光电效应中，增大光强改变什么？ | 改变光电子数和饱和电流；不改变最大动能。 |
| 光电效应中，增大频率改变什么？ | 改变单个光子能量和最大动能。 |
| Compton 位移最大在什么角？ | $\theta=180^\circ$，最大位移 $2\lambda_C$。 |
| Bohr 模型中氢能级依赖什么？ | 只依赖主量子数 $n$。 |
| de Broglie 波长与动量关系？ | $\lambda=h/p$。 |
| 波函数整体相位是否可观测？ | 不可观测；相对相位可观测。 |
| 能量本征态一定是定态吗？ | 是。 |
| 不同能量本征态叠加一般是定态吗？ | 一般不是。 |
| 无限深势阱壁上边界条件？ | $\psi=0$。 |
| 有限势垒边界通常要求？ | $\psi$ 和 $\psi'$ 连续。 |
| $E>V$ 的区域波函数形态？ | 振荡解。 |
| $E<V$ 的区域波函数形态？ | 指数解。 |
| 振幅系数是否等于概率？ | 不是；概率与模平方及概率流有关。 |
| 厄米算符本征值有什么性质？ | 本征值为实数。 |
| 不同本征值的厄米本征态关系？ | 正交。 |
| $[\hat x,\hat p_x]$ 等于什么？ | $i\hbar$。 |
| 对易为零意味着什么？ | 可有共同本征态，可同时确定。 |
| $L^2$ 本征值？ | $l(l+1)\hbar^2$。 |
| $L_z$ 本征值？ | $m\hbar$。 |
| 给定 $l$，$m$ 有几个？ | $2l+1$ 个。 |
| 自旋 $1/2$ 测任意方向的本征值？ | $\pm\hbar/2$。 |
| 测量后状态怎么变？ | 坍缩到测得值对应本征态或本征子空间。 |
| SG 分裂条数由什么决定？ | $2J+1$。 |
| 项符号 ${}^{2S+1}L_J$ 左上角表示？ | 多重度 $2S+1$。 |
| 电子磁矩与角动量方向？ | 因电子带负电，方向相反。 |
| 两个电子总波函数必须怎样？ | 交换反对称。 |
| 同一空间轨道最多几个电子？ | 2 个，且自旋相反。 |
| 金属、半导体、绝缘体看什么？ | 看 Fermi 能级附近能否有可用空态和禁带大小。 |
| n 型半导体多数载流子？ | 电子。 |
| p 型半导体多数载流子？ | 空穴。 |
| Bloch 定理说明电子完全自由吗？ | 不说明；仍有周期调制 $u_k(x)$。 |

## 自测清单

完成本章后，至少要能不看答案回答下面问题：

1.  看到势能分段图，能否立刻判断每段是振荡解还是指数解？

2.  看到一个初态，能否先判断它是否已经按本征态展开？

3.  测量概率、期望值、坍缩后的态三者是否能分开说清？

4.  自旋题中，是否总能先写出当前基底和待测基底？

5.  给定 ${}^{2S+1}L_J$，能否在一分钟内求出 $S,L,J,g_J,2J+1$？

6.  给定 $n,l,m$，能否立刻写出 $L^2,L_z$，并判断简并度？

7.  Pauli 原理限制的是四个量子数，还是只限制空间轨道？

8.  能带、禁带、掺杂和 PN 结能否用一两句话解释清楚？

# 作业题详解

下面保留题意摘要，重点放在解题路径和最后答案。

## 第一次作业：早期量子论

### 第一次作业 1：宇宙背景辐射黑体估算（课后 1-1）

**题目：**交大版《量子物理（第二版）》课后习题 1-1：宇宙大爆炸遗留在宇宙空间的均匀背景辐射相当于温度约为 $3\,\mathrm K$ 的黑体辐射，试计算：1）此辐射的单色辐出度的峰值波长；2）地球表面接收到此辐射的功率。

**模型识别：**温度 $T=3\,\mathrm K$ 的黑体辐射。峰值波长用 Wien 位移定律，接收功率用 Stefan–Boltzmann 定律。

``` math
\lambda_m T=b,\qquad b=2.898\times10^{-3}\,\mathrm{m\,K}.
```

所以
``` math
\lambda_m=\frac{2.898\times10^{-3}}{3}
=9.66\times10^{-4}\,\mathrm m=0.966\,\mathrm{mm}.
```

黑体辐出度
``` math
M=\sigma T^4=5.67\times10^{-8}\times3^4
=4.59\times10^{-6}\,\mathrm{W\,m^{-2}}.
```

若题目问单位面积接收到的功率，就是
``` math
\boxed{4.59\times10^{-6}\,\mathrm{W\,m^{-2}}}.
```
若题目问整个地球表面总功率，取 $R_E=6.37\times10^6\,\mathrm m$：
``` math
P=4\pi R_E^2M
\approx 2.34\times10^9\,\mathrm W.
```

**易错点：**太阳常数是定向入射用 $\pi R_E^2$ 截面积；各向同性背景辐射照到整个球面时，按表面总面积 $4\pi R_E^2$ 估算。

### 第一次作业 2：Compton 散射反推波长和角度（课后 1-10）

**题目：**交大版《量子物理（第二版）》课后习题 1-10：在 Compton 散射中，入射 X 射线的波长为 $0.003\,\mathrm{nm}$，反冲电子的速率为 $0.6c$，求散射光子的波长和散射方向。

反冲电子必须用相对论动能：
``` math
\gamma=\frac1{\sqrt{1-\beta^2}}=\frac1{\sqrt{1-0.6^2}}=1.25,
\qquad K_e=(\gamma-1)m_ec^2=0.25\times511\,\mathrm{keV}=127.8\,\mathrm{keV}.
```

入射光子能量
``` math
E_\gamma=\frac{hc}{\lambda}
=\frac{1240\,\mathrm{eV\,nm}}{0.003\,\mathrm{nm}}
=413.3\,\mathrm{keV}.
```

能量守恒给出散射光子能量：
``` math
E_\gamma'=E_\gamma-K_e=285.5\,\mathrm{keV},
\qquad
\lambda'=\frac{1240\,\mathrm{eV\,nm}}{2.855\times10^5\,\mathrm{eV}}
=0.00434\,\mathrm{nm}.
```

Compton 位移
``` math
\lambda'-\lambda=\lambda_C(1-\cos\theta),
\qquad \lambda_C=0.002426\,\mathrm{nm}.
```
于是
``` math
\cos\theta
=1-\frac{0.004342-0.003000}{0.002426}
=0.447,
\qquad
\boxed{\theta\simeq63.5^\circ}.
```

**答案：**
``` math
\boxed{\lambda'=0.00434\,\mathrm{nm}},\qquad
\boxed{\theta\simeq63.5^\circ}.
```

### 第一次作业 3：类氢离子的 Bohr 轨道（课后 1-12）

**题目：**交大版《量子物理（第二版）》课后习题 1-12：对于氢原子、$\mathrm{He}^+$、$\mathrm{Li}^{2+}$，分别计算：1）它们的第一、第二 Bohr 轨道半径及电子在这些轨道上的速度；2）电子的基态能量；3）由第一激发态到基态发射光子的波长。

**模型识别：**氢、$\mathrm{He}^+$、$\mathrm{Li}^{2+}$ 都是一电子类氢体系，核电荷数分别为 $Z=1,2,3$。

常用公式：
``` math
r_n=\frac{a_0n^2}{Z},\qquad
v_n=\frac{Z\alpha c}{n},\qquad
E_n=-\frac{13.6Z^2}{n^2}\,\mathrm{eV}.
```
由 $n=2\to n=1$ 跃迁：
``` math
\Delta E=13.6Z^2\left(1-\frac14\right)=10.2Z^2\,\mathrm{eV},
\qquad
\lambda=\frac{1240}{10.2Z^2}\,\mathrm{nm}.
```

| 体系 | $Z$ | $r_1/\mathrm{nm}$ | $r_2/\mathrm{nm}$ | $v_1, v_2/(\mathrm{m\,s^{-1}})$ | $E_1,\lambda_{2\to1}$ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| 体系 | $Z$ | $r_1/\mathrm{nm}$ | $r_2/\mathrm{nm}$ | $v_1, v_2/(\mathrm{m\,s^{-1}})$ | $E_1,\lambda_{2\to1}$ |
| H | 1 | 0.0529 | 0.2117 | $2.19\times10^6,\ 1.09\times10^6$ | $-13.6\,\mathrm{eV},\ 121.5\,\mathrm{nm}$ |
| $\mathrm{He}^+$ | 2 | 0.0265 | 0.1058 | $4.38\times10^6,\ 2.19\times10^6$ | $-54.4\,\mathrm{eV},\ 30.4\,\mathrm{nm}$ |
| $\mathrm{Li}^{2+}$ | 3 | 0.0176 | 0.0706 | $6.56\times10^6,\ 3.28\times10^6$ | $-122.4\,\mathrm{eV},\ 13.5\,\mathrm{nm}$ |

**易错点：**类氢体系能量按 $Z^2$ 放大，半径按 $1/Z$ 缩小，速度按 $Z$ 放大。

### 第一次作业 4：质子碰撞激发氢原子的阈值速度

**题目：**运动的质子与一个处于静止的基态氢原子作完全非弹性的对心碰撞，欲使原子发射出光子，则质子至少应以多大的速度运动。

氢原子从 $n=1$ 激发到 $n=2$ 的最小内能增加为
``` math
\Delta E=13.6\left(1-\frac14\right)=10.2\,\mathrm{eV}.
```

完全非弹性碰撞中，动量守恒导致一部分入射动能保留为整体平动。设入射质子质量 $m$，静止氢原子质量 $M$，初动能为 $K$，则可转化为内部激发的最大能量为
``` math
K_{\rm cm}=K\frac{M}{m+M}.
```
阈值条件
``` math
K\frac{M}{m+M}=\Delta E.
```
氢原子质量近似等于质子质量，$M\simeq m$，所以
``` math
K_{\min}\simeq2\Delta E=20.4\,\mathrm{eV}.
```

由 $K_{\min}=\frac12m_pv^2$ 得
``` math
v_{\min}=\sqrt{\frac{2K_{\min}}{m_p}}
\simeq6.25\times10^4\,\mathrm{m\,s^{-1}}.
```

``` math
\boxed{v_{\min}\approx6.3\times10^4\,\mathrm{m\,s^{-1}}}
```

## 第二次作业：物质波、不确定关系和一维势阱

### 第二次作业 1：动能等于静能的电子（课后 1-16）

**题目：**交大版《量子物理（第二版）》课后习题 1-16：若一个电子的动能等于静能，试求该电子的速率和 de Broglie 波长。

题设 $K=m_ec^2$。相对论总能量
``` math
E=\gamma m_ec^2=K+m_ec^2=2m_ec^2,
```
所以
``` math
\gamma=2,\qquad
\beta=\sqrt{1-\frac1{\gamma^2}}=\frac{\sqrt3}{2}.
```

``` math
\boxed{v=0.866c}.
```

动量满足
``` math
E^2=p^2c^2+m_e^2c^4,
```
代入 $E=2m_ec^2$：
``` math
pc=\sqrt{3}m_ec^2,\qquad p=\sqrt3m_ec.
```

de Broglie 波长
``` math
\lambda=\frac hp=\frac{h}{\sqrt3m_ec}
=1.40\times10^{-12}\,\mathrm m.
```

``` math
\boxed{\lambda=1.40\,\mathrm{pm}}.
```

### 第二次作业 2：用不确定关系估算氢原子基态

**题目：**利用不确定关系估算氢原子基态能量及半径。

把电子局域在半径 $r$ 内，估计动量量级
``` math
p\sim\Delta p\sim\frac{\hbar}{r}.
```

氢原子能量可估为
``` math
E(r)\sim\frac{p^2}{2m_e}-\frac{e^2}{4\pi\varepsilon_0r}
=\frac{\hbar^2}{2m_er^2}-\frac{ke^2}{r}.
```

令 $dE/dr=0$：
``` math
-\frac{\hbar^2}{m_er^3}+\frac{ke^2}{r^2}=0
\quad\Rightarrow\quad
r=\frac{\hbar^2}{m_eke^2}=a_0.
```

代回能量：
``` math
E_0=-\frac{m_ek^2e^4}{2\hbar^2}=-13.6\,\mathrm{eV}.
```

``` math
\boxed{r\sim a_0=0.0529\,\mathrm{nm}},\qquad
\boxed{E_0\sim-13.6\,\mathrm{eV}}.
```

**说明：**这题不是严格推导，而是说明量子动能阻止电子塌缩到原子核上。

### 第二次作业 3：三维指数波函数归一化和区域概率

**题目：**已知粒子波函数
``` math
\Psi=N\exp\left(-\frac{|x|}{2a}-\frac{|y|}{2b}-\frac{|z|}{2c}\right),
```
试求：1）归一化常数 $N$；2）粒子的 $x$ 坐标在 $0$ 到 $a$ 之间的概率；3）粒子的 $y$ 坐标和 $z$ 坐标分别在 $-b$ 到 $+b$ 和 $-c$ 到 $+c$ 之间的概率。

已知
``` math
\Psi=N\exp\left(-\frac{|x|}{2a}-\frac{|y|}{2b}-\frac{|z|}{2c}\right).
```
因此
``` math
|\Psi|^2=N^2\exp\left(-\frac{|x|}{a}-\frac{|y|}{b}-\frac{|z|}{c}\right).
```

归一化积分可分离：
``` math
\int_{-\infty}^{\infty}e^{-|x|/a}dx=2a,
\quad
\int e^{-|y|/b}dy=2b,
\quad
\int e^{-|z|/c}dz=2c.
```
所以
``` math
N^2(2a)(2b)(2c)=1
\quad\Rightarrow\quad
\boxed{N=\frac1{\sqrt{8abc}}}.
```

$x$ 坐标在 $0$ 到 $a$ 的概率为
``` math
P(0<x<a)=\frac{\int_0^a e^{-x/a}dx}{\int_{-\infty}^{\infty}e^{-|x|/a}dx}
=\frac{a(1-e^{-1})}{2a}
=\boxed{\frac{1-e^{-1}}2}.
```

$y$ 在 $[-b,b]$ 的概率为
``` math
P(-b<y<b)=\frac{\int_{-b}^{b}e^{-|y|/b}dy}{2b}=1-e^{-1}.
```
$z$ 在 $[-c,c]$ 的概率同样为 $1-e^{-1}$。若题目要求二者同时成立，则
``` math
\boxed{P=(-b<y<b,\ -c<z<c)=(1-e^{-1})^2}.
```

### 第二次作业 4：半壁无限高有限深势阱束缚态

**题目：**设质量为 $m$ 的粒子在半壁无限高的一维方势阱中运动：
``` math
V(x)=
\begin{cases}
\infty,&x<0,\\
0,&0\le x\le a,\\
V_0,&x>a.
\end{cases}
```
试求在 $E<V_0$ 的束缚态情况下：1）粒子能级的表达式；2）阱深 $V_0$ 和阱宽 $a$ 需满足什么关系，才能保证此阱中至少存在一个束缚态？

势能为
``` math
V(x)=
\begin{cases}
\infty,&x<0,\\
0,&0\le x\le a,\\
V_0,&x>a.
\end{cases}
```
束缚态满足 $0<E<V_0$。在 $0<x<a$ 区域波函数振荡，在 $x>a$ 区域指数衰减：
``` math
\psi_1=A\sin kx,\qquad k=\frac{\sqrt{2mE}}{\hbar},
```
``` math
\psi_2=Be^{-\kappa(x-a)},\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
```

$x=0$ 处无限高墙要求 $\psi(0)=0$，所以不能有 $\cos kx$ 项。$x=a$ 处有限势垒要求 $\psi,\psi'$ 连续：
``` math
A\sin ka=B,\qquad
Ak\cos ka=-\kappa B.
```
两式相除得到能量方程
``` math
\boxed{k\cot(ka)=-\kappa}.
```

令
``` math
\rho=\frac{a\sqrt{2mV_0}}{\hbar},\qquad \xi=ka,
```
则
``` math
\boxed{\xi\cot\xi=-\sqrt{\rho^2-\xi^2}}.
```

至少有一个束缚态要求第一支解存在。临界情况为 $E\to V_0$，即 $\kappa\to0$，第一根在
``` math
ka=\frac{\pi}{2}.
```
因此
``` math
\boxed{\frac{a\sqrt{2mV_0}}{\hbar}>\frac{\pi}{2}},
\qquad
\boxed{V_0>\frac{\pi^2\hbar^2}{8ma^2}}.
```

## 第三次作业：势垒、展开、对易和角动量

### 第三次作业 1：台阶势散射（课后 2-1）

**题目：**交大版《量子物理（第二版）》课后习题 2-1：自由粒子能量为 $E$，从左侧入射到一维台阶势
``` math
V(x)=
\begin{cases}
0,&x\le0,\\
V_0,&x>0.
\end{cases}
```
分别讨论 $E>V_0$ 和 $0<E<V_0$ 时的波函数形式、反射系数 $R$ 和透射系数 $T$。

势能为
``` math
V(x)=
\begin{cases}
0,&x\le0,\\
V_0,&x>0.
\end{cases}
```
粒子从左边入射。

#### 情形一：$E>V_0$

两侧都是振荡波：
``` math
\psi_I=e^{ik_1x}+re^{-ik_1x},\qquad
\psi_{II}=te^{ik_2x},
```
``` math
k_1=\frac{\sqrt{2mE}}{\hbar},\qquad
k_2=\frac{\sqrt{2m(E-V_0)}}{\hbar}.
```

$x=0$ 处连续：
``` math
1+r=t,\qquad k_1(1-r)=k_2t.
```
解得
``` math
r=\frac{k_1-k_2}{k_1+k_2},\qquad
t=\frac{2k_1}{k_1+k_2}.
```

反射系数和透射系数要用概率流：
``` math
\boxed{R=\left(\frac{k_1-k_2}{k_1+k_2}\right)^2},
```
``` math
\boxed{T=\frac{k_2}{k_1}|t|^2
=\frac{4k_1k_2}{(k_1+k_2)^2}}.
```

#### 情形二：$0<E<V_0$

右侧是指数衰减波：
``` math
\psi_I=e^{ikx}+re^{-ikx},\qquad
\psi_{II}=Ce^{-\kappa x},
```
``` math
k=\frac{\sqrt{2mE}}{\hbar},\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
```
边界条件给
``` math
r=\frac{k-i\kappa}{k+i\kappa}.
```
因此
``` math
|r|^2=1,\qquad
\boxed{R=1,\quad T=0}.
```

**物理解释：**右侧虽然有非零穿透深度 $1/\kappa$，但没有向 $+x$ 方向传播的概率流，所以没有透射流。

### 第三次作业 2：无限深势阱初态 $Ax(a-x)$（课后 2-11）

**题目：**交大版《量子物理（第二版）》课后习题 2-11：一维无限深方势阱宽度为 $a$，$t=0$ 时粒子波函数为
``` math
\psi(x,0)=Ax(a-x).
```
求：1）平均能量 $\langle E\rangle$；2）$\langle x\rangle,\langle p_x\rangle$；3）$\Delta p_x$；4）$\psi(x,t)$。

粒子在 $0<x<a$ 的无限深势阱中：
``` math
\phi_n(x)=\sqrt{\frac2a}\sin\frac{n\pi x}{a},
\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2}.
```
初态
``` math
\psi(x,0)=Ax(a-x).
```

#### 归一化

``` math
1=A^2\int_0^a x^2(a-x)^2dx
=A^2\frac{a^5}{30}.
```
所以
``` math
\boxed{A=\sqrt{\frac{30}{a^5}}}.
```

#### 平均能量

势阱内 $V=0$，且波函数在边界为零：
``` math
\bar E=\langle H\rangle
=\frac{\hbar^2}{2m}\int_0^a|\psi'(x)|^2dx.
```
因为
``` math
\psi'(x)=A(a-2x),
\qquad
\int_0^a(a-2x)^2dx=\frac{a^3}{3},
```
所以
``` math
\bar E=\frac{\hbar^2}{2m}\frac{30}{a^5}\frac{a^3}{3}
=\boxed{\frac{5\hbar^2}{ma^2}}
=\frac{10}{\pi^2}E_1.
```

#### 坐标和动量平均

波函数关于 $a/2$ 对称：
``` math
\boxed{\bar x=\frac a2}.
```

``` math
\bar p_x=\int_0^a\psi^*(-i\hbar)\psi' dx
=-\frac{i\hbar}{2}\int_0^a\frac{d}{dx}\psi^2dx=0.
```

又
``` math
\langle p_x^2\rangle=2m\bar E
=\frac{10\hbar^2}{a^2}.
```
因此
``` math
\boxed{\Delta p_x=\sqrt{\langle p_x^2\rangle-\langle p_x\rangle^2}
=\frac{\sqrt{10}\hbar}{a}}.
```

#### 任意时刻波函数

展开系数
``` math
c_n=\int_0^a\phi_n(x)\psi(x,0)dx
=\frac{2\sqrt{60}\,[1-(-1)^n]}{n^3\pi^3}.
```
也就是偶数 $n$ 的系数为零，奇数 $n$ 的系数为
``` math
c_n=\frac{4\sqrt{60}}{n^3\pi^3}\qquad(n\ {\rm odd}).
```

所以
``` math
\boxed{
\psi(x,t)=\sum_{\substack{n=1\\ n\ {\rm odd}}}^{\infty}
\frac{4\sqrt{60}}{n^3\pi^3}\,
\phi_n(x)e^{-iE_nt/\hbar}
}.
```

### 第三次作业 3：对易关系计算

**题目：**计算算符对易关系 $[x,L_x]$、$[p_x,L_y]$、$[L_x,L_y]$、$[L^2,L_x]$；计算氢原子的 Hamiltonian 算符与 $L^2$ 算符之间的对易关系。

基本对易关系：
``` math
[x_i,p_j]=i\hbar\delta_{ij},\qquad
\mathbf L=\mathbf r\times\mathbf p.
```

``` math
L_x=yp_z-zp_y,\qquad
L_y=zp_x-xp_z.
```

逐个计算：
``` math
[x,L_x]=[x,yp_z-zp_y]=0,
```
因为 $x$ 与 $y,z,p_y,p_z$ 都对易。

``` math
[p_x,L_y]=[p_x,zp_x-xp_z]
=0-[p_x,x]p_z
=i\hbar p_z.
```

角动量代数：
``` math
\boxed{[L_x,L_y]=i\hbar L_z}.
```

角动量平方是旋转标量：
``` math
\boxed{[L^2,L_x]=0}.
```

氢原子哈密顿量
``` math
H=\frac{p^2}{2\mu}-\frac{e^2}{4\pi\varepsilon_0r}
```
只依赖 $p^2$ 和 $r$，具有球对称性，因此
``` math
\boxed{[H,L^2]=0}.
```

### 第三次作业 4：角变量波函数的 $L_z$ 测量（课后 1-45）

**题目：**交大版《量子物理（第二版）》课后习题 1-45：已知角变量波函数
``` math
\Psi(\varphi)=\sqrt{\frac1{3\pi}}+\sqrt{\frac1{6\pi}}e^{-i\varphi}.
```
证明其归一化；若测量 $L_z$，可能得到哪些值、概率是多少，并求 $\langle L_z\rangle$。

题设
``` math
\Psi(\varphi)=\sqrt{\frac1{3\pi}}+\sqrt{\frac1{6\pi}}e^{-i\varphi}.
```
$L_z$ 的归一化本征函数为
``` math
u_m(\varphi)=\frac1{\sqrt{2\pi}}e^{im\varphi},
\qquad
L_zu_m=m\hbar u_m.
```

把题给波函数写成本征态展开：
``` math
\Psi=\sqrt{\frac23}\,u_0+\sqrt{\frac13}\,u_{-1}.
```
归一化立即成立：
``` math
\left|\sqrt{\frac23}\right|^2+\left|\sqrt{\frac13}\right|^2=1.
```

测量 $L_z$ 的可能值：
``` math
m=0\Rightarrow L_z=0,\qquad
m=-1\Rightarrow L_z=-\hbar.
```
概率分别为
``` math
\boxed{P(0)=\frac23},\qquad
\boxed{P(-\hbar)=\frac13}.
```

平均值
``` math
\boxed{\langle L_z\rangle=0\cdot\frac23+(-\hbar)\frac13=-\frac{\hbar}{3}}.
```

### 第三次作业 5：谐振子叠加态（课后 2-18）

**题目：**交大版《量子物理（第二版）》课后习题 2-18：一维谐振子初态为
``` math
\Psi(x,0)=\sqrt{\frac12}\psi_0(x)
+i\sqrt{\frac15}\psi_1(x)+A\psi_2(x).
```
求：1）$t$ 时刻归一化波函数；2）测得 $E=3\hbar\omega/2$ 的概率；3）平均能量。

题设一维谐振子初态为
``` math
\Psi(x,0)=\sqrt{\frac12}\psi_0(x)
+i\sqrt{\frac15}\psi_1(x)+A\psi_2(x).
```
归一化要求
``` math
\frac12+\frac15+|A|^2=1
\quad\Rightarrow\quad
|A|^2=\frac3{10}.
```
若取 $A$ 为正实数：
``` math
\boxed{A=\sqrt{\frac3{10}}}.
```

谐振子能级
``` math
E_n=\left(n+\frac12\right)\hbar\omega.
```
任意时刻
``` math
\boxed{
\Psi(x,t)=\sqrt{\frac12}\psi_0e^{-iE_0t/\hbar}
+i\sqrt{\frac15}\psi_1e^{-iE_1t/\hbar}
+\sqrt{\frac3{10}}\psi_2e^{-iE_2t/\hbar}
}.
```

测得能量 $3\hbar\omega/2$ 对应 $n=1$，概率为
``` math
\boxed{P(E_1)=\left|i\sqrt{\frac15}\right|^2=\frac15}.
```

平均能量
``` math
\bar E=\frac12\cdot\frac12\hbar\omega
+\frac15\cdot\frac32\hbar\omega
+\frac3{10}\cdot\frac52\hbar\omega
=\boxed{\frac{13}{10}\hbar\omega}.
```

## 补充课后题：自旋和氢原子测量

### 课后 1-50：已知 $S_z=+\hbar/2$，测倾斜轴 $z'$

**题目：**交大版《量子物理（第二版）》课后习题 1-50：设电子自旋的 $z$ 分量是 $\hbar/2$，求沿着与 $z$ 轴成 $\theta$ 角的 $z'$ 轴方向，自旋的分量等于 $\hbar/2$ 或 $-\hbar/2$ 的概率。

设 $z'$ 与 $z$ 轴夹角为 $\theta$，并取 $z'$ 在 $xz$ 平面内。若初态为
``` math
|z,+\rangle=
\begin{pmatrix}1\\0\end{pmatrix},
```
则
``` math
|z',+\rangle=
\begin{pmatrix}
\cos(\theta/2)\\
\sin(\theta/2)
\end{pmatrix},
\qquad
|z',-\rangle=
\begin{pmatrix}
-\sin(\theta/2)\\
\cos(\theta/2)
\end{pmatrix}.
```

测量沿 $z'$ 方向自旋：
``` math
P\left(+\frac{\hbar}{2}\right)
=|\langle z',+|z,+\rangle|^2
=\boxed{\cos^2\frac{\theta}{2}},
```
``` math
P\left(-\frac{\hbar}{2}\right)
=|\langle z',-|z,+\rangle|^2
=\boxed{\sin^2\frac{\theta}{2}}.
```

**记忆法：**自旋 $1/2$ 态转过角度 $\theta$，振幅用半角 $\theta/2$。

### 课后 1-51：$S_x,S_y,S_z$ 本征矢和基变换

**题目：**交大版《量子物理（第二版）》课后习题 1-51：求解电子自旋 $\hat S_x,\hat S_y,\hat S_z$ 的本征矢，并以 $\hat S_y$ 的本征矢为基矢将 $\hat S_x$ 的本征矢展开；测量 $\hat S_y$ 可能的本征值有哪些？对应的概率是多少？平均值是什么？

在 $S_z$ 表象中
``` math
|z,+\rangle=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|z,-\rangle=\begin{pmatrix}0\\1\end{pmatrix}.
```

三个方向的本征矢可取为
``` math
|x,+\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\quad
|x,-\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix},
```
``` math
|y,+\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},
\quad
|y,-\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}.
```

把 $S_x$ 本征矢用 $S_y$ 本征矢展开：
``` math
|x,+\rangle
=\frac{1-i}{2}|y,+\rangle+\frac{1+i}{2}|y,-\rangle,
```
``` math
|x,-\rangle
=\frac{1+i}{2}|y,+\rangle+\frac{1-i}{2}|y,-\rangle.
```

如果粒子处于任一 $S_x$ 本征态后测 $S_y$，则
``` math
P\left(S_y=+\frac{\hbar}{2}\right)=\frac12,\qquad
P\left(S_y=-\frac{\hbar}{2}\right)=\frac12.
```
平均值为
``` math
\boxed{\langle S_y\rangle=0}.
```

### 课后 2-23：氢原子 $n=3,l=2$ 的轨道角动量取向

**题目：**交大版《量子物理（第二版）》课后习题 2-23：氢原子处于 $n=3,l=2$ 的激发态时，原子的轨道角动量在空间有哪些可能取向？并计算各种可能取向的角动量与 $z$ 轴的夹角。

给定 $l=2$，轨道角动量大小为
``` math
L=\sqrt{l(l+1)}\hbar=\sqrt6\,\hbar.
```
磁量子数
``` math
m=-2,-1,0,1,2,
```
对应
``` math
L_z=m\hbar.
```

角动量与 $z$ 轴夹角满足
``` math
\cos\theta_m=\frac{L_z}{L}=\frac{m}{\sqrt6}.
```

| $m$  |   $L_z$   |  $\theta_m$   |
|:------:|:-----------:|:---------------:|
| $m$  |   $L_z$   |  $\theta_m$   |
| $2$  | $2\hbar$  | $35.3^\circ$  |
| $1$  |  $\hbar$  | $65.9^\circ$  |
| $0$  |    $0$    |  $90^\circ$   |
| $-1$ | $-\hbar$  | $114.1^\circ$ |
| $-2$ | $-2\hbar$ | $144.7^\circ$ |

``` math
\boxed{\text{共有 }2l+1=5\text{ 个空间取向。}}
```

### 课后 2-26：氢原子叠加态的时间演化和测量

**题目：**交大版《量子物理（第二版）》课后习题 2-26：氢原子能量本征函数为 $\psi_{nlm}$，能量本征值为 $E_n$，其中 $n$ 为主量子数，$l$ 为角量子数，$m_l$ 为磁量子数。在 $t=0$ 时，氢原子的波函数为
``` math
\Psi(\mathbf r,0)=\frac1{\sqrt{10}}
\left(\psi_{100}+2\psi_{210}+\sqrt3\psi_{211}+\sqrt2\psi_{21,-1}\right),
```
不考虑自旋。1）写出任意时刻 $t$ 体系的波函数 $\psi(\mathbf r,t)$；2）求任意时刻 $t$ 体系处于 $l=1,m_l=1$ 态的概率；3）求任意时刻 $t$ 体系处于 $m_l=0$ 态的概率；4）求任意时刻 $t$ 体系的平均能量、角动量平方算符的平均值及角动量 $z$ 分量算符的平均值。

题设
``` math
\Psi(\mathbf r,0)=\frac1{\sqrt{10}}
\left(\psi_{100}+2\psi_{210}+\sqrt3\psi_{211}+\sqrt2\psi_{21,-1}\right),
```
忽略自旋。

氢原子能量只依赖主量子数 $n$：
``` math
E_n=-\frac{13.6}{n^2}\,\mathrm{eV}.
```
因此
``` math
\boxed{
\Psi(\mathbf r,t)=\frac1{\sqrt{10}}
\left[
\psi_{100}e^{-iE_1t/\hbar}
+\left(2\psi_{210}+\sqrt3\psi_{211}+\sqrt2\psi_{21,-1}\right)e^{-iE_2t/\hbar}
\right]}.
```

$l=1,m=1$ 对应 $\psi_{211}$，概率
``` math
\boxed{P(l=1,m=1)=\frac{|\sqrt3|^2}{10}=\frac3{10}}.
```

$m=0$ 包括 $\psi_{100}$ 和 $\psi_{210}$，概率
``` math
\boxed{P(m=0)=\frac{1^2+2^2}{10}=\frac12}.
```

平均能量
``` math
\boxed{\langle E\rangle=\frac1{10}E_1+\frac9{10}E_2}
=\frac{-13.6+9(-3.4)}{10}\,\mathrm{eV}
=\boxed{-4.42\,\mathrm{eV}}.
```

平均 $L^2$：
``` math
\langle L^2\rangle
=\frac1{10}\cdot0+\frac9{10}\cdot 1(1+1)\hbar^2
=\boxed{\frac95\hbar^2}.
```

平均 $L_z$：
``` math
\langle L_z\rangle
=\frac3{10}\hbar+\frac2{10}(-\hbar)
=\boxed{\frac{\hbar}{10}}.
```

## 第五次作业：磁矩、SG、LS 耦合和自旋测量

### 第五次作业 1：${}^{2}D_{3/2}$ 态的磁矩

**题目：**试计算原子处于 ${}^{2}D_{3/2}$ 状态的磁矩 $\mu$ 及投影 $\mu_z$ 的可能值。

项符号 ${}^{2S+1}L_J={}^{2}D_{3/2}$ 给出
``` math
S=\frac12,\qquad L=2,\qquad J=\frac32.
```

朗德因子
``` math
g_J=1+\frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}.
```
代入
``` math
J(J+1)=\frac{15}{4},\quad S(S+1)=\frac34,\quad L(L+1)=6,
```
得
``` math
\boxed{g_J=\frac45}.
```

磁矩算符与总角动量关系
``` math
\boldsymbol\mu=-g_J\mu_B\frac{\mathbf J}{\hbar}.
```
磁矩大小
``` math
|\mu|=g_J\mu_B\sqrt{J(J+1)}
=\frac45\mu_B\sqrt{\frac{15}{4}}
=\boxed{\frac{2\sqrt{15}}{5}\mu_B}.
```

$m_J=-\frac32,-\frac12,\frac12,\frac32$，所以
``` math
\mu_z=-g_J\mu_Bm_J.
```
可能值为
``` math
\boxed{\mu_z=\pm\frac65\mu_B,\ \pm\frac25\mu_B}.
```

### 第五次作业 2：把 SG 实验中的氢换成 ${}^{4}F_{3/2}$ 原子

**题目：**在 Stern–Gerlach 实验中，基态氢原子从炉中射出，在屏幕上接收到两条氢束线，间距为 $0.6\,\mathrm{cm}$。若把氢原子换成基态钒原子 ${}^{4}F_{3/2}$，其他实验条件不变，那么在屏上可以接收到几条束线，相邻两束的间距为多少？

基态氢原子可看成 ${}^{2}S_{1/2}$：
``` math
L=0,\quad S=\frac12,\quad J=\frac12,\quad g_H\simeq2.
```
两条线间距给定为 $0.6\,\mathrm{cm}$。

对 ${}^{4}F_{3/2}$：
``` math
2S+1=4\Rightarrow S=\frac32,\qquad L=3,\qquad J=\frac32.
```
朗德因子
``` math
g_V=1+\frac{\frac{15}{4}+\frac{15}{4}-12}{2\cdot\frac{15}{4}}
=\boxed{\frac25}.
```

SG 分裂条数为
``` math
\boxed{2J+1=4}.
```
相邻条纹间距与 $g_J$ 成正比，因此
``` math
\Delta x_V=\frac{g_V}{g_H}\Delta x_H
=\frac{2/5}{2}\times0.6\,\mathrm{cm}
=\boxed{0.12\,\mathrm{cm}}.
```

### 第五次作业 3：$S=1/2,L=2$ 时 $\mathbf L\cdot\mathbf S$ 的可能值

**题目：**对于 $S=1/2$ 和 $L=2$，试计算 $\mathbf L\cdot\mathbf S$ 的可能值。

角动量耦合
``` math
J=L+S,L+S-1,\ldots,|L-S|.
```
所以
``` math
J=\frac52,\frac32.
```

用
``` math
\mathbf L\cdot\mathbf S
=\frac12\left(J^2-L^2-S^2\right)
```
即
``` math
L\cdot S=\frac{\hbar^2}{2}
\left[J(J+1)-L(L+1)-S(S+1)\right].
```

当 $J=5/2$：
``` math
L\cdot S=\frac{\hbar^2}{2}
\left(\frac{35}{4}-6-\frac34\right)
=\boxed{\hbar^2}.
```

当 $J=3/2$：
``` math
L\cdot S=\frac{\hbar^2}{2}
\left(\frac{15}{4}-6-\frac34\right)
=\boxed{-\frac32\hbar^2}.
```

### 第五次作业 4：$(nd)^2$ 与 $nd(n'd)$ 的 LS 原子态

**题目：**根据 L–S 耦合法则，$(nd)^2$ 组态可形成哪几种原子态？$nd(n'd)$ 可形成哪些原子态？

两个 $d$ 电子都有 $l=2$，所以总轨道角动量 $L$ 可从 $0$ 到 $4$，即
``` math
L=S,P,D,F,G.
```
两个电子自旋 $s=1/2$，总自旋
``` math
S=0\quad\text{或}\quad S=1.
```

#### 等价电子组态 $(nd)^2$

两个电子处于同一 $n,l$ 壳层，必须满足 Pauli 原理。等价 $d^2$ 组态允许项为
``` math
\boxed{{}^{1}S_0,\ {}^{1}D_2,\ {}^{1}G_4,\ {}^{3}P_{0,1,2},\ {}^{3}F_{2,3,4}}.
```

记忆方式：等价电子会删掉一部分普通耦合项；$d^2$ 的标准结果就是
``` math
{}^{1}S,\ {}^{1}D,\ {}^{1}G,\ {}^{3}P,\ {}^{3}F.
```

#### 非等价电子组态 $nd(n'd)$

若 $n\ne n'$，两个电子不等价，不需要删除项。所有 $L=0,1,2,3,4$ 与 $S=0,1$ 的组合都允许：
``` math
\boxed{{}^{1}S_0,\ {}^{3}S_1}
```
``` math
\boxed{{}^{1}P_1,\ {}^{3}P_{0,1,2}}
```
``` math
\boxed{{}^{1}D_2,\ {}^{3}D_{1,2,3}}
```
``` math
\boxed{{}^{1}F_3,\ {}^{3}F_{2,3,4}}
```
``` math
\boxed{{}^{1}G_4,\ {}^{3}G_{3,4,5}}.
```

### 第五次作业 5：给定自旋态求平均值和连续测量

**题目：**设电子处于如下自旋态（$S_z$ 表象）：
``` math
\chi=\frac15
\begin{pmatrix}
3i\\4
\end{pmatrix}.
```
1）计算 $\langle S_x\rangle,\langle S_y\rangle,\langle S_z\rangle$ 和 $\langle S_x^2\rangle,\langle S_y^2\rangle,\langle S_z^2\rangle$；2）若在该状态上测量 $S_y$ 所得值为 $\hbar/2$，则再测量 $S_x$ 会得到什么样的结果？

题设在 $S_z$ 表象中
``` math
\chi=\frac15
\begin{pmatrix}
3i\\4
\end{pmatrix}.
```
记
``` math
\alpha=\frac{3i}{5},\qquad \beta=\frac45.
```
归一化：
``` math
|\alpha|^2+|\beta|^2=\frac9{25}+\frac{16}{25}=1.
```

Pauli 矩阵期望：
``` math
\langle\sigma_x\rangle=\alpha^*\beta+\beta^*\alpha=0,
```
``` math
\langle\sigma_y\rangle=-i\alpha^*\beta+i\beta^*\alpha=-\frac{24}{25},
```
``` math
\langle\sigma_z\rangle=|\alpha|^2-|\beta|^2=-\frac7{25}.
```
因为 $S_i=\frac{\hbar}{2}\sigma_i$，
``` math
\boxed{\langle S_x\rangle=0},\qquad
\boxed{\langle S_y\rangle=-\frac{12}{25}\hbar},\qquad
\boxed{\langle S_z\rangle=-\frac{7}{50}\hbar}.
```

对自旋 $1/2$，
``` math
S_x^2=S_y^2=S_z^2=\frac{\hbar^2}{4}I.
```
因此
``` math
\boxed{\langle S_x^2\rangle=\langle S_y^2\rangle=\langle S_z^2\rangle=\frac{\hbar^2}{4}}.
```

若第一次测 $S_y$ 得到 $+\hbar/2$，态坍缩为
``` math
|y,+\rangle=\frac1{\sqrt2}
\begin{pmatrix}1\\ i\end{pmatrix}.
```
再测 $S_x$：
``` math
|\langle x,+|y,+\rangle|^2=\frac12,\qquad
|\langle x,-|y,+\rangle|^2=\frac12.
```
所以第二次测量结果为
``` math
\boxed{S_x=+\frac{\hbar}{2}\ \text{或}\ -\frac{\hbar}{2}},
\qquad P_+=P_-=\frac12.
```

## 第六次作业：固体基础和量子信息边缘题

### 第六次作业 1：Si 中 P 施主能级（课后 5-3）

**题目：**《量子物理（第二版）》课后习题 5-3：N 型半导体 Si 中含有杂质原子 P，在计算施主能级时，作为初级近似，可看做一个电子绕 $P^+$ 离子运动，类似于一个浸没在无限大电介质 Si 中的类氢原子。已知 Si 的相对介电常数为 $11.5$，电子在硅中的有效质量为 $0.26m_0$，求施主基态能级。

有效质量和介电常数修正后的类氢模型：
``` math
E_n^*=-\frac{m^*/m_0}{\varepsilon_r^2}\frac{13.6\,\mathrm{eV}}{n^2}.
```

题给
``` math
\varepsilon_r=11.5,\qquad m^*=0.26m_0.
```
施主基态能级
``` math
E_1^*=-\frac{0.26}{11.5^2}\times13.6\,\mathrm{eV}
=\boxed{-2.67\times10^{-2}\,\mathrm{eV}}.
```

这表示施主能级位于导带底下方约
``` math
\boxed{26.7\,\mathrm{meV}}.
```

### 第六次作业 2：Bloch 球自旋态与磁场中演化

**题目：**Bloch 球可用于表示一个量子比特。现一电子的自旋状态用 Bloch 球的矢量
``` math
\mathbf n=\sin\theta\,\mathbf i+\cos\theta\,\mathbf k
```
表示，其中 $\mathbf i$ 和 $\mathbf k$ 为 Bloch 球中 $x$ 方向和 $z$ 方向的单位矢量，$\theta$ 为矢量 $\mathbf n$ 与 $z$ 轴的夹角。1）写出该电子的自旋波函数（矩阵形式）。已知 Bloch 球中 $|0\rangle$ 表示自旋向上的状态，$|1\rangle$ 表示自旋向下的状态；2）将电子置于大小为 $B_0$、沿 $z$ 方向的外磁场中，Hamiltonian 算符为
``` math
\hat H=-\gamma B_0\hat S_z
=-\gamma B_0\frac{\hbar}{2}
\begin{pmatrix}
1&0\\0&-1
\end{pmatrix},
```
其中常数 $\gamma$ 称为电子回转磁比率。如果电子 $t=0$ 时刻处于第 1）问所描述的状态，求任意 $t>0$ 时刻电子的自旋状态，并计算该时刻 $x$、$y$、$z$ 方向自旋的平均值。

Bloch 球方向
``` math
\mathbf n=\sin\theta\,\mathbf i+\cos\theta\,\mathbf k
```
位于 $xz$ 平面，与 $z$ 轴夹角为 $\theta$。对应自旋向 $\mathbf n$ 的态为
``` math
\boxed{
\chi(0)=
\begin{pmatrix}
\cos(\theta/2)\\
\sin(\theta/2)
\end{pmatrix}}.
```

外磁场沿 $z$ 方向，
``` math
H=-\gamma B_0S_z=-\frac{\gamma B_0\hbar}{2}\sigma_z.
```
令
``` math
\Omega=\gamma B_0.
```
两个 $S_z$ 基态的能量分别为
``` math
E_\uparrow=-\frac{\hbar\Omega}{2},\qquad
E_\downarrow=+\frac{\hbar\Omega}{2}.
```
因此
``` math
\chi(t)=
\begin{pmatrix}
\cos(\theta/2)e^{i\Omega t/2}\\
\sin(\theta/2)e^{-i\Omega t/2}
\end{pmatrix}.
```
去掉整体相位，也可写为
``` math
\boxed{
\chi(t)\sim
\begin{pmatrix}
\cos(\theta/2)\\
e^{-i\Omega t}\sin(\theta/2)
\end{pmatrix}}.
```

用后一种形式计算平均值：
``` math
\langle\sigma_x\rangle=\sin\theta\cos\Omega t,
```
``` math
\langle\sigma_y\rangle=-\sin\theta\sin\Omega t,
```
``` math
\langle\sigma_z\rangle=\cos\theta.
```
所以
``` math
\boxed{\langle S_x\rangle=\frac{\hbar}{2}\sin\theta\cos(\gamma B_0t)},
```
``` math
\boxed{\langle S_y\rangle=-\frac{\hbar}{2}\sin\theta\sin(\gamma B_0t)},
```
``` math
\boxed{\langle S_z\rangle=\frac{\hbar}{2}\cos\theta}.
```

**注意：**如果约定把电子回转磁比率 $\gamma$ 本身取负，$S_y$ 的正负号会随约定变化；只要从题给 Hamiltonian 出发，推导相位即可。

### 第六次作业 3：张量积、CNOT 和纠缠判断

**题目：**1）计算
``` math
\frac1{\sqrt2}
\begin{pmatrix}1\\1\end{pmatrix}
\otimes
\begin{pmatrix}1\\0\end{pmatrix}
```
的张量积；2）将上述双量子比特态通过 CNOT 门后，会得到什么样的状态？通过 CNOT 前后的量子态是否为纠缠态？

初态
``` math
\frac1{\sqrt2}
\begin{pmatrix}1\\1\end{pmatrix}
\otimes
\begin{pmatrix}1\\0\end{pmatrix}
=\frac1{\sqrt2}
\begin{pmatrix}
1\\0\\1\\0
\end{pmatrix}
=\frac1{\sqrt2}(|00\rangle+|10\rangle).
```

若 CNOT 以前一量子比特为控制位、后一量子比特为目标位：
``` math
|00\rangle\to|00\rangle,\qquad
|10\rangle\to|11\rangle.
```
因此
``` math
\boxed{\mathrm{CNOT}\,\frac{|00\rangle+|10\rangle}{\sqrt2}
=\frac{|00\rangle+|11\rangle}{\sqrt2}}.
```
矩阵形式为
``` math
\boxed{\frac1{\sqrt2}
\begin{pmatrix}
1\\0\\0\\1
\end{pmatrix}}.
```

CNOT 前：
``` math
\frac{|00\rangle+|10\rangle}{\sqrt2}
=\frac{|0\rangle+|1\rangle}{\sqrt2}\otimes|0\rangle,
```
可以分解为直积态，所以
``` math
\boxed{\text{不是纠缠态}}.
```

CNOT 后：
``` math
\frac{|00\rangle+|11\rangle}{\sqrt2}
```
不能写成单粒子态直积。例如系数矩阵
``` math
\begin{pmatrix}
1/\sqrt2&0\\
0&1/\sqrt2
\end{pmatrix}
```
行列式非零，秩为 2，因此不能分解为一列乘一行。
``` math
\boxed{\text{是纠缠态。}}
```

# 易混概念对照

| 概念 | 不要混淆为 | 正确理解 |
|:---|:---|:---|
| 概念 | 不要混淆为 | 正确理解 |
| 波函数 | 真实经典波 | 概率幅，模平方是概率密度 |
| 概率叠加 | 概率直接相加 | 概率幅叠加，概率含干涉项 |
| 概率振幅 $c_n$ | 概率 | 概率是 $|c_n|^2$，期望值是本征值按概率加权 |
| 定态 | 波函数完全不变 | 概率密度不变，整体相位随时间变 |
| 本征态 | 任意态 | 测某力学量有确定值的态 |
| 能量本征态 | 任意定态叠加 | 能量本征态一定是定态；不同能量本征态叠加一般不是定态 |
| 简并 | 能量相近 | 同一精确本征值对应多个线性无关态 |
| 自旋 | 小球自转 | 内禀角动量，无经典轨道图像 |
| 轨道 | 电子路径 | 原子轨道是波函数空间分布 |
| 量子数 $l,m$ | 角动量本身 | $L^2=l(l+1)\hbar^2$，$L_z=m\hbar$ |
| 隧穿 | 粒子能量变大越过势垒 | 波函数在禁区指数衰减并在另一侧有非零振幅 |
| 散射振幅 | 反射率/透射率 | 概率流可能引入波数因子，振幅模平方不一定直接等于 $R,T$ |
| Pauli 原理 | 两电子不能靠近 | 两个费米子不能占据完全相同单粒子态 |
| 纠缠 | 普通相关 | 不能分解为子系统直积态的量子关联 |
