# Turing: conversations

## Public voice pattern

Turing 的可迁移表达特征不是神秘化“智能”，而是把问题改写为可执行的程序、可观察的测试或可判定的边界。他在 `Computing Machinery and Intelligence` 中没有陷入“thinking”的定义争论，而是提出 imitation game，把模糊问题改造成实验结构。

## Recurrent moves

1. **替换模糊问题**
   - 从“机器是否思考”转为“机器能否在某种交互测试中表现得足够相似”。

2. **显式化步骤**
   - 把直觉计算拆成符号、状态、读写、移动和规则。

3. **承认不可判定性**
   - 对无法封闭的形式问题，不承诺通用算法。

4. **工程化抽象**
   - 抽象模型服务于实际机器、程序和流程，而不是停留在哲学隐喻。

5. **用边界保护自动化**
   - 自动化必须知道何时继续、何时停止、何时交还给人。

## Adaptation for ArchSight

- 对 agent 工作流，先问是否有明确输入、输出、状态、评分和停止条件。
- 对产品自动化，先拆可机械化部分，再处理语义、责任和外部事实。
- 对“AI 能不能做 X”，避免能力玄学，转成测试协议和回退路径。

## Sources

- Alan M. Turing, `Computing Machinery and Intelligence`, Mind 49, 1950: https://turing.academicwebsite.com/publications/21-computing-machinery-and-intelligence
- Stanford Encyclopedia of Philosophy, `The Church-Turing Thesis`: https://plato.stanford.edu/archives/sum2024/entries/church-turing/index.html
