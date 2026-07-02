## 核心公式速查

### 线性空间和线性映射

| 对象 | 公式/结论 | 考法 |
|----|----|----|
| 维数公式 | $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$ | 子空间和、交、直和判断。 |
| 秩-零度 | $\dim V=\dim\ker T+\dim\operatorname{Im}T$ | 核、像、单射、满射、同构。 |
| 矩阵表示 | $[T(v)]_{B'}=A[v]_B$ | 选基后线性映射变矩阵。 |
| 换基相似 | $A'=P^{-1}AP$ | 同一线性变换在不同基下的矩阵。 |
| 矩阵方程 | $\operatorname{vec}(AXB)=(B^T\otimes A)\operatorname{vec}(X)$ | $AX+XB$、$AXB=C$ 类题。 |

### 内积和正交

$$G=((e_i,e_j)),\qquad A^*Ax=A^*b,\qquad V=W\oplus W^\perp\quad(\text{有限维内积空间})$$

- 复内积和复矩阵里，转置通常要换成共轭转置 $A^*$。
- 正交投影的核心句子：误差 $b-Ax$ 落在 $W^\perp$。

### 特征值、最小多项式、Jordan

| 判别 | 结论 | 一句话记法 |
|----|----|----|
| 可对角化 | $m_A(x)$ 在该数域上分裂且无重因子 | 最小多项式没有平方因子。 |
| 最大 Jordan 块 | $(x-\lambda)$ 在 $m_A$ 中的指数 | 最小多项式看最大块。 |
| Jordan 块个数 | $\dim\ker(A-\lambda I)$ | 几何重数看块数。 |
| 块大小统计 | $d_k=\dim\ker(A-\lambda I)^k$ | $d_k-d_{k-1}$ 是大小至少 $k$ 的块数。 |

$$J_s(\lambda)=\lambda I+N,\qquad N^s=0,\qquad f(J_s(\lambda))=\sum_{j=0}^{s-1}\frac{f^{(j)}(\lambda)}{j!}N^j$$

### λ-矩阵、矩阵函数、SVD、对偶

| 主题 | 必须记住 | 高频坑 |
|----|----|----|
| Smith 标准形 | $d_1\mid d_2\mid\cdots\mid d_r$；不变因子来自行列式因子之商。 | 这是 $F[\lambda]$ 上的初等变换，不是普通数值行列变换。 |
| 初等因子 | $(\lambda-\lambda_i)^s\leftrightarrow$ 一个 $s$ 阶 Jordan 块。 | 初等因子和 Jordan 块一一对应。 |
| 矩阵函数 | 用 Jordan 块或最小多项式插值，不是逐元素代入。 | 重 Jordan 块要用导数。 |
| SVD | $A=U\Sigma V^*$，奇异值是 $A^*A$ 特征值平方根。 | 相抵弱于相似；SVD左右两边可不同。 |
| 对偶映射 | 若 $T:U\to V$，则 $T^*:V^*\to U^*$。 | 方向反过来，矩阵通常转置。 |

## 多项式理论

多项式整除不可约

### 要点

- 带余除法和 Euclidean 算法。
- 最大公因式、互素、Bezout 表达式。
- 不可约和标准分解必须说明所在数域。
- 根、重根和 $f'$ 的关系。

### 1.1 形式多项式

在数域 $F$ 上，$F[x]$ 是以形式符号 $x$ 为变量的多项式环。两个多项式相等，指对应次数的系数全相等；这不同于两个多项式函数在每个点取值相等。有限域上尤其要小心。

### 1.2 带余除法和最大公因式

$$f(x)=q(x)g(x)+r(x),\qquad \deg r<\deg g.$$

这个公式是后面一切“可算”的入口。Euclidean 算法反复做带余除法，最终得到最大公因式；回代得到 Bezout 等式。

$$d=\gcd(f,g)\quad\Longrightarrow\quad \exists u,v\in F[x],\\ uf+vg=d.$$

### 1.3 不可约和分解

- “不可约”必须带着数域说：$x^2+1$ 在 $\mathbb R$ 上不可约，在 $\mathbb C$ 上可约。
- 实系数多项式的非实根成共轭对出现。
- Eisenstein 判别法常用于构造或证明 $\mathbb Q[x]$ 上不可约。

### 题型模板

1.  求 $\gcd(f,g)$ 并写出 $uf+vg=d$。
2.  判断给定多项式在 $\mathbb Q,\mathbb R,\mathbb C,\mathbb F_p$ 上是否可约。
3.  用互素整除性质证明 $f\mid h$。
4.  用 $f$ 和 $f'$ 判断重根。

## 内积、正交、行列式拾遗

内积正交投影行列式

### 要点

- Gram 矩阵/度量矩阵的性质。
- 正交补、直和、维数公式。
- 正交投影和最小二乘法方程。
- 行列式乘法、初等变换、分块三角矩阵。

![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgOTAwIDI2MCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSLmraPkuqTmipXlvbHnpLrmhI8iPjxyZWN0IHg9IjQwIiB5PSIxOTAiIHdpZHRoPSI2MTAiIGhlaWdodD0iMTYiIGZpbGw9IiNkY2U5ZWMiIC8+PGxpbmUgeDE9IjE2MCIgeTE9IjE5OCIgeDI9IjY1MCIgeTI9IjE5OCIgc3Ryb2tlPSIjMTc2ODdjIiBzdHJva2Utd2lkdGg9IjMiPjwvbGluZT48Y2lyY2xlIGN4PSI1MDAiIGN5PSI3MCIgcj0iOCIgZmlsbD0iI2Q1YTI2MiI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iNTAwIiBjeT0iMTk4IiByPSI4IiBmaWxsPSIjMTc2ODdjIj48L2NpcmNsZT48bGluZSB4MT0iNTAwIiB5MT0iNzAiIHgyPSI1MDAiIHkyPSIxOTgiIHN0cm9rZT0iIzZiNzI4MCIgc3Ryb2tlLWRhc2hhcnJheT0iOCA3IiBzdHJva2Utd2lkdGg9IjMiPjwvbGluZT48dGV4dCB4PSI1MTQiIHk9Ijc0IiBmaWxsPSIjMzM0MTU1IiBmb250LXNpemU9IjI0Ij5iPC90ZXh0Pjx0ZXh0IHg9IjUxNCIgeT0iMjE0IiBmaWxsPSIjMzM0MTU1IiBmb250LXNpemU9IjI0Ij5wcm9qX1cgYjwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjIzMiIgZmlsbD0iIzMzNDE1NSIgZm9udC1zaXplPSIyNCI+VyA9IENvbChBKTwvdGV4dD48dGV4dCB4PSI1NjAiIHk9IjEzOCIgZmlsbD0iIzZiNzI4MCIgZm9udC1zaXplPSIyMiI+YiAtIEF4IOKIiCBX4oqlPC90ZXh0Pjwvc3ZnPg==)

正交投影的方程来自“误差垂直于子空间”：$A^*(b-Ax)=0$。

### 2.1 Gram 矩阵和内积

给定基 $e_1,\ldots,e_n$，Gram 矩阵为 $G=((e_i,e_j))$。实情形是对称正定矩阵；复情形是 Hermite 正定矩阵。

### 2.2 正交补和投影

$$\dim W+\dim W^\perp=\dim V,\qquad (U+W)^\perp=U^\perp\cap W^\perp.$$

若 $A$ 的列向量张成子空间 $W$，投影向量写为 $Ax$，则

$$A^*(b-Ax)=0\quad\Longleftrightarrow\quad A^*Ax=A^*b.$$

### 注意

## 映射、线性映射和矩阵表示

核和像同构矩阵方程

### 要点

- 求 $\ker T$、$\operatorname{Im}T$、秩和零度。
- 判断单射、满射、同构。
- 写出线性映射在两组基下的矩阵。
- 把 $AXB=C$ 或 $AX+XB=C$ 转成普通线性方程。

### 3.1 坐标化的核心

线性代数 II 的主线之一是：抽象向量选基后变成坐标，线性映射选基后变成矩阵。

$$[T(v)]_{B'}=A[v]_B.$$

同一个线性变换在不同基下的矩阵相似，这就是相似关系真正的来源。

### 3.2 Hom 空间

有限维情形下，$\operatorname{Hom}(V,W)$ 本身也是线性空间，并且

$$\dim\operatorname{Hom}(V,W)=\dim V\cdot\dim W.$$

### 3.3 矩阵方程

关键是会把问题变成线性方程。

$$\operatorname{vec}(AXB)=(B^T\otimes A)\operatorname{vec}(X).$$

## 特征值、对角化、Schur 和正规矩阵

特征值对角化正规矩阵

### 要点

- 不同特征值对应特征向量线性无关。
- 可交换矩阵的不变子空间思想。
- Schur：复矩阵可酉相似到上三角。
- 正规矩阵可酉对角化；Hermite 特征值实。

### 4.1 对角化

可对角化的意思是有一组特征向量基。它是“把空间分解成一维不变子空间”的最理想情况。

### 4.2 正规矩阵谱定理

$$A^*A=AA^*\quad\Longleftrightarrow\quad A\text{ 可酉对角化}.$$

- 实对称矩阵是 Hermite 矩阵的实版本，可正交对角化。
- Hermite 矩阵特征值全为实数。
- 酉/正交相似保持内积结构，比普通相似更强。

### 4.3 注意

古典伴随矩阵和特征值关系常用于小题。Gershgorin 圆盘定理也要会用。

## 最小多项式、幂零、Jordan 和根子空间

最小多项式幂零Jordan

### 要点

- 最小多项式的定义和相似不变性。
- Cayley-Hamilton：$m_A\mid \chi_A$。
- 幂零变换的 Jordan 链。
- 由 $\dim\ker(A-\lambda I)^k$ 推 Jordan 块。

![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgOTAwIDI5MCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJKb3JkYW4g6ZO+56S65oSPIj48ZGVmcz48bWFya2VyIGlkPSJhcnJvdyIgbWFya2Vyd2lkdGg9IjEwIiBtYXJrZXJoZWlnaHQ9IjEwIiByZWZ4PSI3IiByZWZ5PSIzIiBvcmllbnQ9ImF1dG8iPjxwYXRoIGQ9Ik0wLDAgTDAsNiBMOCwzIHoiIGZpbGw9IiMxNzY4N2MiIC8+PC9tYXJrZXI+PC9kZWZzPjxyZWN0IHg9IjcwIiB5PSI4OCIgd2lkdGg9IjE0NSIgaGVpZ2h0PSI1OCIgcng9IjQiIGZpbGw9IiNlZWY3ZjgiIHN0cm9rZT0iIzljYzVjZCIgLz48cmVjdCB4PSIyODUiIHk9Ijg4IiB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjU4IiByeD0iNCIgZmlsbD0iI2VlZjdmOCIgc3Ryb2tlPSIjOWNjNWNkIiAvPjxyZWN0IHg9IjUwMCIgeT0iODgiIHdpZHRoPSIxNDUiIGhlaWdodD0iNTgiIHJ4PSI0IiBmaWxsPSIjZWVmN2Y4IiBzdHJva2U9IiM5Y2M1Y2QiIC8+PHJlY3QgeD0iNzE1IiB5PSI4OCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI1OCIgcng9IjQiIGZpbGw9IiNmZmY4ZjEiIHN0cm9rZT0iI2Q1YTI2MiIgLz48dGV4dCB4PSIxMDgiIHk9IjEyMyIgZmlsbD0iIzMzNDE1NSIgZm9udC1zaXplPSIyNCI+zrE8L3RleHQ+PHRleHQgeD0iMzE4IiB5PSIxMjMiIGZpbGw9IiMzMzQxNTUiIGZvbnQtc2l6ZT0iMjQiPkLOsTwvdGV4dD48dGV4dCB4PSI1MjIiIHk9IjEyMyIgZmlsbD0iIzMzNDE1NSIgZm9udC1zaXplPSIyNCI+QsKyzrE8L3RleHQ+PHRleHQgeD0iNzU1IiB5PSIxMjMiIGZpbGw9IiMzMzQxNTUiIGZvbnQtc2l6ZT0iMjQiPjA8L3RleHQ+PGxpbmUgeDE9IjIxNSIgeTE9IjExNyIgeDI9IjI4MCIgeTI9IjExNyIgc3Ryb2tlPSIjMTc2ODdjIiBzdHJva2Utd2lkdGg9IjMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIj48L2xpbmU+PGxpbmUgeDE9IjQzMCIgeTE9IjExNyIgeDI9IjQ5NSIgeTI9IjExNyIgc3Ryb2tlPSIjMTc2ODdjIiBzdHJva2Utd2lkdGg9IjMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIj48L2xpbmU+PGxpbmUgeDE9IjY0NSIgeTE9IjExNyIgeDI9IjcxMCIgeTI9IjExNyIgc3Ryb2tlPSIjMTc2ODdjIiBzdHJva2Utd2lkdGg9IjMiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIj48L2xpbmU+PHRleHQgeD0iNzIiIHk9IjIwNSIgZmlsbD0iIzUzNjI3MyIgZm9udC1zaXplPSIyMiI+6IulIEJedCDOsT0wIOS9hiBCXnt0LTF9zrHiiaAw77yM5YiZIM6xLELOsSwuLi4sQl57dC0xfc6xIOe6v+aAp+aXoOWFs+OAgjwvdGV4dD48L3N2Zz4=)

Jordan 链就是幂零部分把向量一级一级往下推，直到变成 0。

### 5.1 最小多项式

最小多项式 $m_A$ 是次数最低的首一零化多项式。相似矩阵有相同的最小多项式。

$$p(A)=0\quad\Longleftrightarrow\quad m_A(x)\mid p(x).$$

### 5.2 Jordan 块读法

- 代数重数：某特征值在特征多项式里的次数。
- 几何重数：$\dim\ker(A-\lambda I)$，也是该特征值的 Jordan 块个数。
- 最大块大小：$(x-\lambda)$ 在最小多项式里的指数。

### 5.3 典型计算

1.  求 $\chi_A$ 和候选特征值。
2.  算 $d_k=\dim\ker(A-\lambda I)^k$。
3.  用 $d_k-d_{k-1}$ 得到大小至少为 $k$ 的块数。
4.  写出 Jordan 标准形，必要时构造 Jordan 基。

## $\lambda$-矩阵、Smith 标准形和有理标准形

Smith不变因子初等因子

### 要点

- $\lambda$-等价和 Smith 标准形。
- 行列式因子、不变因子、初等因子。
- 由初等因子写 Jordan 块。
- 用 $\lambda I-A$ 判别相似。

### 6.1 Smith 标准形

在 $F[\lambda]$ 上做初等行列变换，可以把多项式矩阵化成对角形式。

$$\operatorname{diag}(d_1(\lambda),d_2(\lambda),\ldots,d_r(\lambda)),\qquad d_i\mid d_{i+1}.$$

### 6.2 三类因子

- 行列式因子 $D_k$：所有 $k$ 阶子式的最大公因式。
- 不变因子：$d_k=D_k/D_{k-1}$。
- 初等因子：把不变因子分解成准素因子。

### 6.3 和 Jordan 的关系

$$\text{初等因子 }(\lambda-\lambda_i)^s \quad\Longleftrightarrow\quad \text{一个 }s\text{ 阶 Jordan 块 }J_s(\lambda_i).$$

概念之间的转换、由初等因子写标准形仍要会。

## 矩阵函数

矩阵函数Jordan 块插值

### 要点

- 会算 $A^n$、$e^A$、$\sin A$ 这类题。
- 掌握 Jordan 块公式。
- 会用最小多项式做插值降次。
- 知道重根/重块时要匹配导数。

### 7.1 Jordan 块公式

若 $J_s(\lambda)=\lambda I+N$，其中 $N$ 是标准幂零块，则

$$f(J_s(\lambda))=f(\lambda)I+f'(\lambda)N+\frac{f''(\lambda)}{2!}N^2+\cdots+\frac{f^{(s-1)}(\lambda)}{(s-1)!}N^{s-1}.$$

### 7.2 最小多项式插值

若 $m_A(x)=\prod_i(x-\lambda_i)^{\nu_i}$，要找次数小于 $\deg m_A$ 的 $p$，满足

$$p^{(j)}(\lambda_i)=f^{(j)}(\lambda_i),\qquad 0\le j<\nu_i.$$

然后 $f(A)=p(A)$。这条路线在计算题里很实用，因为不用真的写出完整相似变换矩阵。

## 奇异值分解和相抵标准形

相抵SVD几何意义

### 要点

- 知道相抵允许左右乘不同可逆矩阵。
- 会从 $A^*A$ 求奇异值。
- 理解 $A=U\Sigma V^*$ 的三步几何意义。
- 知道非零奇异值个数等于秩。

### 8.1 SVD

$$A=U\Sigma V^*,\qquad \sigma_i=\sqrt{\lambda_i(A^*A)}.$$

几何上，$V^*$ 先做坐标系旋转/反射，$\Sigma$ 沿坐标轴拉伸，$U$ 再做旋转/反射。

## 对偶空间、对偶映射和双线性型

对偶基对偶映射双线性型

### 要点

- 会写对偶基：$e^i(e_j)=\delta_{ij}$。
- 对偶映射方向反过来，矩阵转置。
- 双线性型的矩阵表示 $B(x,y)=x^TAy$。
- 会求左/右根子空间和正交空间。

### 9.1 对偶空间

线性函数 $f:V\to F$ 构成的空间记为 $V^*$。有限维时 $\dim V^*=\dim V$。若 $e_1,\ldots,e_n$ 是 $V$ 的一组基，则对偶基 $e^1,\ldots,e^n$ 满足

$$e^i(e_j)=\delta_{ij}.$$

### 9.2 对偶映射

若 $T:U\to V$，则

$$T^*:V^*\to U^*,\qquad T^*(f)=f\circ T.$$

注意方向反了，并且 $(ST)^*=T^*S^*$。

### 9.3 双线性型

双线性型对两个变量分别线性。选基后，矩阵表示为

$$B(x,y)=x^TAy.$$

对称双线性型和二次型相连；一般双线性型可定义左根子空间、右根子空间和正交空间。

拿来刷题

## 题型模板

### 模板 1：判断可对角化

1.  求特征多项式和特征值。
2.  算每个特征值的几何重数。
3.  若几何重数之和等于 $n$，可对角化。
4.  或者求最小多项式：完全分裂且无重因子即对角化。

### 模板 2：由核维数判断 Jordan 块

1.  固定特征值 $\lambda$，算 $d_k=\dim\ker(A-\lambda I)^k$。
2.  $d_k-d_{k-1}$ 是大小至少为 $k$ 的块数。
3.  相邻差分得到恰好大小为 $k$ 的块数。

### 模板 3：由初等因子写 Jordan

1.  把不变因子分解成 $(\lambda-\lambda_i)^s$。
2.  每个因子对应一个 $J_s(\lambda_i)$。
3.  把所有 Jordan 块按特征值或大小排好即可。

### 模板 4：算矩阵函数

1.  若已知 Jordan 形，用 $f(J_s(\lambda))$ 的导数公式。
2.  若已知最小多项式，用 Hermite 插值找低次多项式 $p$。
3.  最后写 $f(A)=p(A)$，避免把函数逐元素代入。

### 模板 5：对偶和双线性型

1.  求对偶基：设 $f_i$ 坐标未知，解 $f_i(e_j)=\delta_{ij}$。
2.  求对偶映射矩阵：在对偶基下通常取原矩阵转置，注意方向。
3.  求双线性型根子空间：解 $Ay=0$ 或 $A^Tx=0$，取决于左/右变量。

最后查漏
