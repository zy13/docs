### 分支合并代码更新规则

```
现有分支A，从A中拉出分支A1进行开发。A1分支开发完毕，现需要合并到A。
那么A1中新增或者修改的代码，是如何合并到A中同文件代码的呢？

规则：比如x文件，A1修改了m，A修改了n，下面分两种情况：
1、m、n代码没有冲突。合并的结果是：x文件包含m、n
2、m、n代码有冲突。合并结果是：m、n解决冲突后的代码
```