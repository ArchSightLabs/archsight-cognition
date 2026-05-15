# Hermes 适配说明

Hermes 适合把 ArchSight Cognitive Agents 作为长期可成长 Agent 的“思维技能库”。

当前内容已经按学科分层：哲学、文学、历史、数学、物理、艺术，以及跨学科 team 面板。

## 最小可用链路

飞书机器人只负责收发消息。真正决定 `/socrates`、`/decision-council` 等命令是否可用的是 Hermes 侧的 gateway 和 agent 配置。

```text
飞书机器人
  -> Hermes Feishu/Lark gateway
  -> Hermes agent: archsight-cognitive-agents
  -> 命令路由表
  -> 读取本仓库 SKILL.md
  -> 返回飞书会话
```

其中：

- Feishu/Lark gateway 负责接收飞书事件、解析消息、调用 Hermes agent、发送回复。
- Hermes agent 负责根据 gateway 传入的用户消息加载对应 skill。
- 命令到 skill 的映射应使用确定性的配置表或代码路由，不建议只靠提示词让模型猜。

## 获取本项目

把仓库克隆到 Hermes 运行进程可读取的本地目录。

Linux 服务器推荐放在稳定的应用目录，例如 `/opt/archsight/archsight-cognitive-agents`：

```bash
sudo mkdir -p /opt/archsight
sudo chown -R "$USER":"$USER" /opt/archsight
git clone https://github.com/ArchSightLabs/archsight-cognitive-agents.git /opt/archsight/archsight-cognitive-agents
```

如果 Hermes 以独立服务用户运行，例如 `hermes`，应确保该用户可读：

```bash
sudo chown -R hermes:hermes /opt/archsight/archsight-cognitive-agents
sudo -u hermes test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/socrates/SKILL.md
```

如果已经克隆，进入目录并更新：

```bash
cd /opt/archsight/archsight-cognitive-agents
git pull
```

在 Hermes 配置中记录这个根目录：

```text
/opt/archsight/archsight-cognitive-agents
```

Windows 本地调试可以使用：

```powershell
git clone https://github.com/ArchSightLabs/archsight-cognitive-agents.git C:\Work\ArchSightLabs\archsight-cognitive-agents
```

如果已经克隆，进入目录并更新：

```powershell
cd C:\Work\ArchSightLabs\archsight-cognitive-agents
git pull
```

在 Hermes 配置中记录这个根目录：

```text
C:\Work\ArchSightLabs\archsight-cognitive-agents
```

## Linux 部署差异

Linux 和 Windows 的核心链路没有差异，差异主要在运行环境：

- 路径使用 `/opt/archsight/archsight-cognitive-agents` 这类 POSIX 路径。
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

第一版推荐让 Hermes 直接读取本仓库，不复制文件。这样更新仓库后，skill 内容会随 `git pull` 更新。

如果 Hermes 只能从固定 skills 目录读取，则把需要的 skill 复制或链接到 Hermes 本地 skills 目录，例如：

```text
.hermes/skills/decision-council/SKILL.md
.hermes/skills/philosophy/socrates/SKILL.md
.hermes/skills/physics/newton/SKILL.md
.hermes/skills/literature/shakespeare/SKILL.md
```

## Agent 配置契约

Hermes agent 应配置一个固定知识库根目录和一张命令路由表。

Linux 服务器示例：

```yaml
agent:
  name: archsight-cognitive-agents
  skill_root: "/opt/archsight/archsight-cognitive-agents"
  default_language: zh-CN

commands:
  /socrates: personas/philosophy/socrates/SKILL.md
  /aristotle: personas/philosophy/aristotle/SKILL.md
  /wittgenstein: personas/philosophy/wittgenstein/SKILL.md
  /kant: personas/philosophy/kant/SKILL.md
  /plato: personas/philosophy/plato/SKILL.md
  /philosophy-cavalry: teams/philosophy-cavalry/SKILL.md
  /decision-council: teams/decision-council/SKILL.md
```

Windows 本地调试示例：

```yaml
agent:
  name: archsight-cognitive-agents
  skill_root: "C:\\Work\\ArchSightLabs\\archsight-cognitive-agents"
  default_language: zh-CN

commands:
  /socrates: personas/philosophy/socrates/SKILL.md
  /aristotle: personas/philosophy/aristotle/SKILL.md
  /wittgenstein: personas/philosophy/wittgenstein/SKILL.md
  /kant: personas/philosophy/kant/SKILL.md
  /plato: personas/philosophy/plato/SKILL.md
  /philosophy-cavalry: teams/philosophy-cavalry/SKILL.md
  /decision-council: teams/decision-council/SKILL.md
```

如果 Hermes 使用 JSON 配置，可以表达为：

```json
{
  "agent": {
    "name": "archsight-cognitive-agents",
    "skill_root": "/opt/archsight/archsight-cognitive-agents",
    "default_language": "zh-CN"
  },
  "commands": {
    "/socrates": "personas/philosophy/socrates/SKILL.md",
    "/aristotle": "personas/philosophy/aristotle/SKILL.md",
    "/wittgenstein": "personas/philosophy/wittgenstein/SKILL.md",
    "/kant": "personas/philosophy/kant/SKILL.md",
    "/plato": "personas/philosophy/plato/SKILL.md",
    "/philosophy-cavalry": "teams/philosophy-cavalry/SKILL.md",
    "/decision-council": "teams/decision-council/SKILL.md"
  }
}
```

这不是要求 Hermes 必须使用 YAML 或 JSON，而是定义接入契约：Hermes 必须能从用户消息中识别命令，并把命令解析成仓库内的 `SKILL.md` 路径。

## 消息处理逻辑

Hermes gateway 或 agent wrapper 应按以下顺序处理飞书消息：

```text
1. 接收飞书消息文本。
2. 读取第一个 token，例如 /socrates。
3. 在 commands 路由表中查找 token。
4. 如果命中，拼接 skill_root 和相对路径。
5. 读取对应 SKILL.md。
6. 将 SKILL.md 内容作为 system/developer context 注入 Hermes agent。
7. 将去掉命令后的用户正文作为 user message。
8. 调用 Hermes agent。
9. 将 agent 输出发送回原飞书 chat_id。
```

示例：

```text
用户消息：
/socrates 我现在该不该重构这个系统？

命中：
personas/philosophy/socrates/SKILL.md

传给 Hermes agent 的用户正文：
我现在该不该重构这个系统？
```

如果没有命中命令，可以使用默认 skill，例如 `teams/decision-council/SKILL.md`，或者返回可用命令列表。

## 推荐 Hermes Prompt

Hermes agent 的系统提示词应只描述如何使用已加载的 skill，不要把命令路由完全交给提示词猜测。

```text
你是 ArchSight Cognitive Agents 的 Hermes agent。

你可以从以下目录加载认知 skill：
/opt/archsight/archsight-cognitive-agents

gateway 会根据用户消息前缀命令加载对应 SKILL.md。
当 skill 已加载时，严格遵守该 skill 的角色、适用场景、方法、输出契约、交接和护栏。

这些 persona 和 team 是学科启发的思维工具，不是历史人物、艺术家或科学家本人的模拟。
输出优先使用清晰中文。英文只保留稳定标识符、工具名、目录名和必要 host 指令片段。
```

## 可用性检查

在 Hermes 所在机器上检查这些文件是否可读：

Linux：

```bash
test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/socrates/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/aristotle/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/wittgenstein/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/kant/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/personas/philosophy/plato/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/teams/philosophy-cavalry/SKILL.md
test -r /opt/archsight/archsight-cognitive-agents/teams/decision-council/SKILL.md
echo "all routed skill paths are readable"
```

Windows：

```powershell
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\personas\philosophy\socrates\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\personas\philosophy\aristotle\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\personas\philosophy\wittgenstein\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\personas\philosophy\kant\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\personas\philosophy\plato\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\teams\philosophy-cavalry\SKILL.md
Test-Path C:\Work\ArchSightLabs\archsight-cognitive-agents\teams\decision-council\SKILL.md
```

Linux 命令全部成功并输出 `all routed skill paths are readable` 即通过；Windows 命令的预期结果都应为 `True`。

最小验收用例：

```text
/socrates 帮我澄清这个产品方向的核心问题。
/philosophy-cavalry 评审这个战略是否自洽。
/decision-council 这个架构决策有哪些风险和下一步？
```

如果飞书能收到 Hermes 回复，并且回复遵守对应 `SKILL.md` 的输出契约，就说明飞书到 Hermes 再到本仓库 skill 的链路已经打通。

## 记忆建议

Hermes 如果启用长期记忆，建议只沉淀以下内容：

- 用户反复出现的价值冲突。
- 用户偏好的决策原则。
- 已验证有效的写作或架构判断框架。
- 对用户长期有用的学科视角组合。

不要把某次情绪化表达永久记为用户稳定偏好。
