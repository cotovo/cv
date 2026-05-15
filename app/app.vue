<script setup lang="ts">
const publicConfig = useRuntimeConfig().public

const name = publicConfig.name || '**璐'
const phone = publicConfig.phone || '133****9192'

useSeoMeta({
	title: `${name} - 安全服务 / 渗透测试实习`,
	description: `${name}的个人简历 - 信息安全技术应用`,
	robots: 'noindex, nofollow',
})
</script>

<template>
<Builder class="block print:hidden" w="fit" m="is-auto x-1 y-.5" />
<article
	bg="white @dark:slate/10 print:transparent"
	p="6 print:x-2 print:y-0"
	text="3.7"
	tracking="wide"
	rounded="xl print:0"
>
	<h1 text="center 6" m="be-2">
		{{ name }}
	</h1>

	<ul columns="sm:2" p="is-0">
		<InfoLi icon="ri:men-line" label="性别">
			男
		</InfoLi>

		<InfoLi icon="ri:calendar-line" label="出生年月">
			2006.10
		</InfoLi>

		<InfoLi icon="ri:smartphone-line" label="电话">
			{{ phone }} (同微信)
		</InfoLi>

		<InfoLi icon="ri:mail-line" label="邮箱">
			<InfoLink to="mailto:cotovo@163.com" />
		</InfoLi>

		<InfoLi icon="ri:school-line" label="学校">
			武汉软件工程职业技术学院
		</InfoLi>

		<InfoLi icon="ri:graduation-cap-line" label="专业">
			信息安全技术应用 (专科 / 2027 届)
		</InfoLi>
	</ul>

	<InfoSection title="个人技能">
		<ul p="is-0">
			<li><b>渗透测试：</b>熟练 OWASP Top 10 漏洞原理，能使用 Burp Suite, Nmap, SQLMap 进行 Web 安全测试。</li>
			<li><b>流量分析：</b>精通 Wireshark，能够对网络流量进行深度分析，识别 Webshell 及 C2 恶意通信特征。</li>
			<li><b>攻防实战：</b>熟悉常用 Web 漏洞利用方式；掌握 Cobalt Strike、冰蝎、哥斯拉等工具原理与免杀技术。</li>
		</ul>
	</InfoSection>

	<InfoSection title="项目经历">
		<Project
			name="企业级网络架构设计与安全加固"
			desc="三层架构 / 虚拟化 / 链路安全"
			from="2026.01"
			to="2026.02"
			:techs="['OSPF', 'VLAN', 'IPsec VPN', 'NAT', 'Telnet']"
		>
			<ul>
				<li><b>架构：</b>采用三层架构与 VLAN 逻辑隔离；部署 IRF 虚拟化及 LACP 提升高可用性。</li>
				<li><b>路由：</b>全网部署 OSPF 并配置 silent-interface；应用 NAT 与 ACL 策略实现分级访问。</li>
				<li><b>安全：</b>搭建 IPsec VPN 隧道实现私网互通；配置 Telnet 远程管理并通过 ACL 严格审计。</li>
			</ul>
		</Project>

		<Project
			name="中小企业域环境渗透测试与评估"
			desc="Web 渗透 / 域渗透 / 攻击链复现"
			from="2025.11"
			to="2025.12"
			:techs="['Nmap', 'Burp Suite', 'Cobalt Strike', 'Mimikatz', 'Active Directory']"
		>
			<ul>
				<li><b>突破：</b>利用 Nmap 识别服务；爆破 CMS 弱口令并配合文件上传漏洞部署 Webshell。</li>
				<li><b>持久：</b>通过 AntSword 上线 Cobalt Strike 建立 C2 通道；利用 Mimikatz 提取内存凭据。</li>
				<li><b>接管：</b>配合 PsExec 实现对 AD 域的完全接管，复现攻击链并针对防御缺陷提出建议。</li>
			</ul>
		</Project>

		<Project
			name="Linux 服务器全栈部署与安全管理"
			desc="服务加固 / 自动化备份 / 资源管理"
			from="2025.10"
			to="2025.11"
			:techs="['CentOS', 'Nginx', 'MySQL', 'NAT']"
		>
			<ul>
				<li><b>权限：</b>实施 security 组划分，利用 chmod/setfacl 建立细粒度权限控制与防火墙策略。</li>
				<li><b>服务：</b>部署 Nginx 仓库与 MySQL（强密码+远程限制），编写脚本实现自动化备份。</li>
				<li><b>保障：</b>配置多磁盘挂载及 fstab 持久化，设置 5GB 磁盘配额保障多用户环境资源稳定。</li>
			</ul>
		</Project>

		<Project
			name="Windows 域环境管理与服务集成"
			desc="AD 域管理 / 组策略 / 身份验证"
			from="2025.06"
			to="2025.07"
			:techs="['Active Directory', 'DNS', 'IIS', 'FTP', 'GPO']"
		>
			<ul>
				<li><b>域控：</b>部署主域控，通过 GPO 强制执行密码策略、桌面重定向及软件下发。</li>
				<li><b>服务：</b>构建主辅 DNS 区域传送体系；基于 IIS 部署多虚拟主机并集成身份验证。</li>
				<li><b>隔离：</b>利用 ADSI Edit 结合 FTP 实现用户级隔离，确保域用户仅能访问其授权目录。</li>
			</ul>
		</Project>
	</InfoSection>

	<InfoSection title="自我评价">
		<ul p="is-0">
			<li>熟练掌握 Web 渗透、内网攻防及 C2 持久化，具备独立完成外网突破到全域接管的实战能力。</li>
			<li>熟悉企业级网络架构设计与加固，精通 Linux/Windows 系统安全运维与服务自动化。</li>
			<li>学习能力强，抗压性高，能快速适应高强度攻防环境，持续关注前沿网络安全技术。</li>
		</ul>
	</InfoSection>
</article>
</template>
