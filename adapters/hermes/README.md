# Hermes 适配说明

Hermes 适合把 ArchSight Cognition 作为长期可成长 Agent 的“思维技能库”。

当前内容已经按学科分层：哲学、文学、历史、数学、物理、艺术，以及跨学科 team 面板。

## 最小可用链路

飞书机器人只负责收发消息。真正决定 `/cog-socrates`、`/cog-decision-council` 等命令是否可用的是 Hermes 侧的 gateway 和 agent 配置。

```text
飞书机器人
  -> Hermes Feishu/Lark gateway
  -> Hermes agent: archsight-cognition
  -> Hermes skills
  -> 读取本仓库 SKILL.md
  -> 返回飞书会话
```

其中：

- Feishu/Lark gateway 负责接收飞书事件、解析消息、调用 Hermes agent、发送回复。
- Hermes agent 负责根据 gateway 传入的用户消息加载对应 skill。
- Hermes 原生支持将已安装或已发现的 skill 作为 `/<skill-name>` 命令使用，优先使用这个机制。
- 只有在不使用 Hermes skills 系统时，才需要额外写自定义命令路由表。

## 获取本项目

把仓库克隆到 Hermes 运行进程可读取的本地目录。

Linux 服务器推荐放在稳定的应用目录，例如 `/opt/archsight/archsight-cognition`：

```bash
sudo mkdir -p /opt/archsight
sudo chown -R "$USER":"$USER" /opt/archsight
git clone https://github.com/ArchSightLabs/archsight-cognition.git /opt/archsight/archsight-cognition
```

如果 Hermes 以独立服务用户运行，例如 `hermes`，应确保该用户可读：

```bash
sudo chown -R hermes:hermes /opt/archsight/archsight-cognition
sudo -u hermes test -r /opt/archsight/archsight-cognition/personas/philosophy/socrates/SKILL.md
```

如果已经克隆，进入目录并更新：

```bash
cd /opt/archsight/archsight-cognition
git pull
```

在 Hermes 配置中记录这个根目录：

```text
/opt/archsight/archsight-cognition
```

Windows 本地调试可以使用：

```powershell
git clone https://github.com/ArchSightLabs/archsight-cognition.git C:\Work\ArchSightLabs\archsight-cognition
```

如果已经克隆，进入目录并更新：

```powershell
cd C:\Work\ArchSightLabs\archsight-cognition
git pull
```

在 Hermes 配置中记录这个根目录：

```text
C:\Work\ArchSightLabs\archsight-cognition
```

## Linux 部署差异

Linux 和 Windows 的核心链路没有差异，差异主要在运行环境：

- 路径使用 `/opt/archsight/archsight-cognition` 这类 POSIX 路径。
- Hermes 以哪个系统用户运行，就必须让哪个用户可读本仓库。
- 如果 Hermes 或 gateway 由 `systemd` 管理，修改配置后需要重启对应服务。
- 如果 gateway 接收飞书事件，需要保证公网入口、反向代理、TLS 和回调路径已经指向 Hermes Feishu/Lark gateway。
- 不要把 `App Secret`、访问 token 或 webhook secret 写进本仓库，应放在 Hermes 服务器的环境变量或私有配置中。

典型重启命令形态如下，服务名以实际部署为准：

```bash
sudo systemctl restart hermes
sudo systemctl restart hermes-feishu-gateway
sudo systemctl status hermes --no-pager
sudo systemctl status hermes-feishu-gateway --no-pager
```

## 推荐安装形态

第一版推荐让 Hermes 通过软链接或 `skills.external_dirs` 读取本仓库，不复制文件。这样更新仓库后，skill 内容会随 `git pull` 更新。

如果 Hermes 只能从固定 skills 目录读取，则把需要的 skill 复制或链接到 Hermes 本地 skills 目录，例如：

```text
.hermes/skills/cog-decision-council/SKILL.md
.hermes/skills/philosophy/cog-socrates/SKILL.md
.hermes/skills/physics/cog-newton/SKILL.md
.hermes/skills/literature/cog-shakespeare/SKILL.md
```

## 命令行设置

Hermes 的 CLI 入口通常是 `hermes`。先确认服务器上的 Hermes 状态：

```bash
hermes version
hermes status
hermes config path
hermes config show
```

### 方式一：软链接到 Hermes skills 目录

这是最直接、最容易验收的方式。把本仓库中的 skill 目录链接到 `~/.hermes/skills/`，Hermes 会把这些 skill 作为斜杠命令暴露出来。

```bash
mkdir -p ~/.hermes/skills/philosophy ~/.hermes/skills/teams

ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/socrates ~/.hermes/skills/philosophy/cog-socrates
ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/aristotle ~/.hermes/skills/philosophy/cog-aristotle
ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/wittgenstein ~/.hermes/skills/philosophy/cog-wittgenstein
ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/kant ~/.hermes/skills/philosophy/cog-kant
ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/plato ~/.hermes/skills/philosophy/cog-plato
ln -sfn /opt/archsight/archsight-cognition/teams/philosophy-cavalry ~/.hermes/skills/teams/cog-philosophy-cavalry
ln -sfn /opt/archsight/archsight-cognition/teams/decision-council ~/.hermes/skills/teams/cog-decision-council
```

如果 Hermes 以 `hermes` 用户运行，应该在该用户的 home 下设置：

```bash
sudo -u hermes mkdir -p /home/hermes/.hermes/skills/philosophy /home/hermes/.hermes/skills/teams

sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/socrates /home/hermes/.hermes/skills/philosophy/cog-socrates
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/aristotle /home/hermes/.hermes/skills/philosophy/cog-aristotle
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/wittgenstein /home/hermes/.hermes/skills/philosophy/cog-wittgenstein
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/kant /home/hermes/.hermes/skills/philosophy/cog-kant
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/personas/philosophy/plato /home/hermes/.hermes/skills/philosophy/cog-plato
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/teams/philosophy-cavalry /home/hermes/.hermes/skills/teams/cog-philosophy-cavalry
sudo -u hermes ln -sfn /opt/archsight/archsight-cognition/teams/decision-council /home/hermes/.hermes/skills/teams/cog-decision-council
```

然后检查 Hermes 是否识别：

```bash
hermes skills list | grep -E 'cog-(socrates|aristotle|wittgenstein|kant|plato|philosophy-cavalry|decision-council)'
```

用 CLI 做一次端到端测试：

```bash
hermes chat --skills cog-socrates -q "帮我澄清这个产品方向的核心问题。"
hermes chat -q "/cog-decision-council 这个架构决策有哪些风险和下一步？"
```

如果新 skill 没立刻出现在当前会话中，开启新会话或在消息平台里发送 `/reset`。

### 方式二：配置外部 skill 目录

如果不想在 `~/.hermes/skills/` 里放软链接，可以让 Hermes 扫描外部目录。目标是让 `~/.hermes/config.yaml` 包含类似配置：

```yaml
skills:
  external_dirs:
    - /opt/archsight/archsight-cognition/personas/philosophy
    - /opt/archsight/archsight-cognition/personas/history
    - /opt/archsight/archsight-cognition/personas/mathematics
    - /opt/archsight/archsight-cognition/personas/physics
    - /opt/archsight/archsight-cognition/personas/literature
    - /opt/archsight/archsight-cognition/personas/art
    - /opt/archsight/archsight-cognition/teams
```

可以用 Hermes 自带配置编辑器：

```bash
hermes config edit
```

也可以先定位配置文件再用服务器上的编辑器修改：

```bash
hermes config path
nano "$(hermes config path)"
```

修改后检查：

```bash
hermes config check
hermes skills list | grep -E 'cog-(socrates|decision-council)'
```

### Feishu/Lark gateway

飞书侧凭据填入 Hermes gateway，不写进本仓库：

```bash
hermes gateway setup
hermes gateway install
hermes gateway start
hermes gateway status
```

调试时可以前台运行：

```bash
hermes gateway run
```

查看日志：

```bash
hermes logs gateway -n 100
hermes logs gateway -f
```

gateway 跑起来后，飞书里发送 `/cog-socrates ...`、`/cog-decision-council ...`。只要 Hermes 已识别这些 skill，命令就会走 Hermes 原生 skill 加载机制。

### 飞书中文触发词

飞书入口不要强依赖 `/cog-socrates` 这类斜杠命令。命令行和 TUI 里可以继续使用 Hermes 原生命令；飞书、群聊和移动端入口更适合用中文前缀或 `#` 前缀。

本目录提供 `skill-aliases.yaml` 作为中文触发词契约。gateway 或 Archie wrapper 可以读取该文件，把用户消息归一化为 Hermes skill 命令。

推荐支持的输入形态：

```text
@Archie 决策委员会：评审这个方案是否值得做。
@Archie #苏格拉底 帮我澄清这个产品问题。
@Archie 用贝叶斯分析这个判断的证据强度。
@Archie 写作评审：帮我看这篇文章的论证和表达。
```

归一化后的内部消息：

```text
/cog-decision-council 评审这个方案是否值得做。
/cog-socrates 帮我澄清这个产品问题。
/cog-bayes 分析这个判断的证据强度。
/cog-writing-review-panel 帮我看这篇文章的论证和表达。
```

常用中文触发词：

| 中文触发词 | Hermes 命令 | 适用场景 |
| --- | --- | --- |
| 苏格拉底、追问、问题澄清 | `/cog-socrates` | 澄清问题、暴露前提 |
| 决策委员会、决策评审、方案评审 | `/cog-decision-council` | 跨学科决策判断 |
| 哲学骑兵、哲学面板、自我复盘 | `/cog-philosophy-cavalry` | 概念、价值、原则和意义审查 |
| 写作评审、文章评审、论证评审 | `/cog-writing-review-panel` | 文章、文案、叙事和表达评审 |
| 科学推理、假设检验、证据评审 | `/cog-scientific-reasoning-panel` | 假设、变量、证据和实验设计 |
| 历史战略、周期评审、路径依赖 | `/cog-historical-strategy-panel` | 战略、制度、周期和历史结构 |
| 贝叶斯、不确定性、证据更新 | `/cog-bayes` | 信息不足下的概率判断 |
| 牛顿、系统建模、约束分析 | `/cog-newton` | 变量、约束、惯性和系统建模 |
| 维特根斯坦、语言澄清、概念澄清 | `/cog-wittgenstein` | 概念误用和表达混乱 |

完整 alias 表见 `adapters/hermes/skill-aliases.yaml`。

如果没有命中中文触发词，不要强行路由到某个 skill；应交给 Archie 默认 agent，由 Archie 根据问题选择合适视角。

### 让 `skill-aliases.yaml` 生效

`skill-aliases.yaml` 不是 Hermes 原生配置文件，单独放在仓库里不会自动生效。它是给 Feishu/Lark gateway 或 Archie wrapper 使用的“归一化配置”。

生效位置应放在 Hermes skills 系统之前：

```text
飞书消息
  -> gateway/Archie wrapper 读取 skill-aliases.yaml
  -> 识别中文触发词
  -> 改写为 /<skill-name> ...
  -> 交给 Hermes agent
  -> Hermes 原生 skills 系统加载 SKILL.md
```

也就是说，Hermes 本身继续只需要识别 `/cog-socrates`、`/cog-decision-council` 等命令；中文触发词由 gateway 或 wrapper 转换。

推荐配置项形态：

```yaml
archsight:
  skill_aliases: /opt/archsight/archsight-cognition/adapters/hermes/skill-aliases.yaml
  alias_match:
    enabled: true
    strip_bot_mention: true
    rewrite_to_hermes_command: true
```

运行时逻辑：

```text
输入: @Archie 决策委员会：评审这个方案
去掉 @Archie: 决策委员会：评审这个方案
命中 aliases: 决策委员会 -> /cog-decision-council
输出给 Hermes: /cog-decision-council 评审这个方案
```

最小伪代码：

```text
aliases = load_yaml(skill_aliases)
message = strip_bot_mention(message)

for skill in aliases.skills:
  for alias in skill.aliases:
    if message starts with alias + "：" or alias + ":":
      return skill.command + " " + text_after_prefix
    if message starts with "#" + alias + " ":
      return skill.command + " " + text_after_prefix
    if message starts with "用" + alias:
      return skill.command + " " + text_after_alias

return message
```

如果当前 Hermes Feishu/Lark gateway 没有“预处理消息”或“wrapper”扩展点，就需要在 gateway 接收飞书事件后、调用 Hermes agent 前加这一层。不要把中文 alias 写进每个 `SKILL.md`，否则命令入口会分散，后续维护困难。

## Agent 配置契约

如果使用 Hermes 原生 skills 系统，通常不需要额外配置命令路由表；`/<skill-name>` 会由 Hermes skills 机制处理。

只有在 gateway 或 agent wrapper 不走 Hermes skills 系统时，才需要配置一个固定知识库根目录和一张命令路由表。

Linux 服务器示例：

```yaml
agent:
  name: archsight-cognition
  skill_root: "/opt/archsight/archsight-cognition"
  default_language: zh-CN

commands:
  /cog-socrates: personas/philosophy/socrates/SKILL.md
  /cog-aristotle: personas/philosophy/aristotle/SKILL.md
  /cog-wittgenstein: personas/philosophy/wittgenstein/SKILL.md
  /cog-kant: personas/philosophy/kant/SKILL.md
  /cog-plato: personas/philosophy/plato/SKILL.md
  /cog-philosophy-cavalry: teams/philosophy-cavalry/SKILL.md
  /cog-decision-council: teams/decision-council/SKILL.md
```

Windows 本地调试示例：

```yaml
agent:
  name: archsight-cognition
  skill_root: "C:\\Work\\ArchSightLabs\\archsight-cognition"
  default_language: zh-CN

commands:
  /cog-socrates: personas/philosophy/socrates/SKILL.md
  /cog-aristotle: personas/philosophy/aristotle/SKILL.md
  /cog-wittgenstein: personas/philosophy/wittgenstein/SKILL.md
  /cog-kant: personas/philosophy/kant/SKILL.md
  /cog-plato: personas/philosophy/plato/SKILL.md
  /cog-philosophy-cavalry: teams/philosophy-cavalry/SKILL.md
  /cog-decision-council: teams/decision-council/SKILL.md
```

如果 Hermes 使用 JSON 配置，可以表达为：

```json
{
  "agent": {
    "name": "archsight-cognition",
    "skill_root": "/opt/archsight/archsight-cognition",
    "default_language": "zh-CN"
  },
  "commands": {
    "/cog-socrates": "personas/philosophy/socrates/SKILL.md",
    "/cog-aristotle": "personas/philosophy/aristotle/SKILL.md",
    "/cog-wittgenstein": "personas/philosophy/wittgenstein/SKILL.md",
    "/cog-kant": "personas/philosophy/kant/SKILL.md",
    "/cog-plato": "personas/philosophy/plato/SKILL.md",
    "/cog-philosophy-cavalry": "teams/philosophy-cavalry/SKILL.md",
    "/cog-decision-council": "teams/decision-council/SKILL.md"
  }
}
```

这不是要求 Hermes 必须使用 YAML 或 JSON，而是定义接入契约：Hermes 必须能从用户消息中识别命令，并把命令解析成仓库内的 `SKILL.md` 路径。

## 消息处理逻辑

使用 Hermes 原生 skills 系统时，gateway 不需要自己解析 `/cog-socrates` 对应哪个文件。它只需要把飞书消息交给 Hermes；Hermes 会在已安装或已发现的 skills 中解析 `/<skill-name>`。

```text
1. 接收飞书消息文本。
2. gateway 将消息交给 Hermes agent。
3. Hermes 识别第一个 token，例如 /cog-socrates。
4. Hermes 从 skills 索引中找到 name 为 cog-socrates 的 SKILL.md。
5. Hermes 按需加载 skill 内容。
6. Hermes 将去掉命令后的用户正文作为任务输入。
7. Hermes agent 生成回复。
8. gateway 将 agent 输出发送回原飞书 chat_id。
```

示例：

```text
用户消息：
/cog-socrates 我现在该不该重构这个系统？

命中：
personas/philosophy/socrates/SKILL.md

传给 Hermes agent 的用户正文：
我现在该不该重构这个系统？
```

如果不使用 Hermes 原生 skills 系统，才需要在 gateway 或 agent wrapper 里实现命令路由表：读取第一个 token，拼接 `skill_root` 和相对路径，读取对应 `SKILL.md`，再注入 agent context。

## 推荐 Hermes Prompt

Hermes agent 的系统提示词应只描述如何使用已加载的 skill，不要把命令路由交给提示词猜测。

```text
你是 ArchSight Cognition 的 Hermes agent。

你可以从以下目录加载认知 skill：
/opt/archsight/archsight-cognition

Hermes skills 系统会根据用户消息前缀命令加载对应 SKILL.md。
当 skill 已加载时，严格遵守该 skill 的角色、适用场景、方法、输出契约、交接和护栏。

这些 persona 和 team 是学科启发的思维工具，不是历史人物、艺术家或科学家本人的模拟。
输出优先使用清晰中文。英文只保留稳定标识符、工具名、目录名和必要 host 指令片段。
```

## 可用性检查

在 Hermes 所在机器上检查这些文件是否可读：

Linux：

```bash
test -r /opt/archsight/archsight-cognition/personas/philosophy/socrates/SKILL.md
test -r /opt/archsight/archsight-cognition/personas/philosophy/aristotle/SKILL.md
test -r /opt/archsight/archsight-cognition/personas/philosophy/wittgenstein/SKILL.md
test -r /opt/archsight/archsight-cognition/personas/philosophy/kant/SKILL.md
test -r /opt/archsight/archsight-cognition/personas/philosophy/plato/SKILL.md
test -r /opt/archsight/archsight-cognition/teams/philosophy-cavalry/SKILL.md
test -r /opt/archsight/archsight-cognition/teams/decision-council/SKILL.md
echo "all routed skill paths are readable"
```

Windows：

```powershell
Test-Path C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\socrates\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\aristotle\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\wittgenstein\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\kant\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\personas\philosophy\plato\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\teams\philosophy-cavalry\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognition\teams\decision-council\SKILL.md
```

Linux 命令全部成功并输出 `all routed skill paths are readable` 即通过；Windows 命令的预期结果都应为 `True`。

最小验收用例：

```text
/cog-socrates 帮我澄清这个产品方向的核心问题。
/cog-philosophy-cavalry 评审这个战略是否自洽。
/cog-decision-council 这个架构决策有哪些风险和下一步？
```

如果飞书能收到 Hermes 回复，并且回复遵守对应 `SKILL.md` 的输出契约，就说明飞书到 Hermes 再到本仓库 skill 的链路已经打通。

## 记忆建议

Hermes 如果启用长期记忆，建议只沉淀以下内容：

- 用户反复出现的价值冲突。
- 用户偏好的决策原则。
- 已验证有效的写作或架构判断框架。
- 对用户长期有用的学科视角组合。

不要把某次情绪化表达永久记为用户稳定偏好。
