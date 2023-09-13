<!DOCTYPE html>
<html lang="zh-CN" class="theme-">
<head data-suburl="">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>gk0748/pxy - 酷云77.js at master - Agit</title>
	<meta name="theme-color" content="#6cc644">
	<meta name="author" content="gk0748" />
	<meta name="description" content="pxy" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />
	<meta name="_csrf" content="4v-Wt9ITdBRbdA8RvM_ZxH_fdK46MTY5NDYwOTU5ODk2OTcwMDQxNw" />
	<meta name="_suburl" content="" />
	
	
	

	<script>
		window.config = {
			AppVer: 'gitea模板还原\u002b138-g943c8c71f',
			AppSubUrl: '',
			StaticUrlPrefix: '',
			UseServiceWorker:  true ,
			csrf: '4v-Wt9ITdBRbdA8RvM_ZxH_fdK46MTY5NDYwOTU5ODk2OTcwMDQxNw',
			HighlightJS: false,
			SimpleMDE: false,
			Tribute: false,
			U2F: false,
			Heatmap: false,
			heatmapUser: null,
			NotificationSettings: {
				MinTimeout:  10000 ,
				TimeoutStep:   10000 ,
				MaxTimeout:  60000 ,
				EventSourceUpdateTime:  10000 ,
			},
			PageIsProjects: false,
      
		};
	</script>
	<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/img/favicon.png" type="image/png">
	<link rel="mask-icon" href="/img/agit-safari.svg" color="#609926">
	<link rel="fluid-icon" href="/img/agit-lg.png" title="Agit">


	<link rel="stylesheet" href="/css/index.css?v=220846678a86246c9d7e7c46c21f20c2">
	<noscript>
		<style>
      .dropdown:hover > .menu { display: block; }
      .ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	<style class="list-search-style"></style>

	
		<meta property="og:title" content="pxy" />
		<meta property="og:url" content="https://agit.ai/gk0748/pxy" />
		
	
	<meta property="og:type" content="object" />
	
		<meta property="og:image" content="https://agit.ai/user/avatar/gk0748/-1" />
	

<meta property="og:site_name" content="Agit" />


<link rel="stylesheet" href="/vendor/plugins/xterm/xterm.css?v=220846678a86246c9d7e7c46c21f20c2" />


</head>
<body>
	

	<div class="full height">
		<noscript>使用 JavaScript能使本网站更好的工作。</noscript>

		

		
			
			<div class="ui top secondary stackable main menu following bar light" style="background: #242628; height: 52px;">
				
<div class="ui container z-max" id="navbar" v-cloak style="position:fixed;">
	<div class="i-flex i-align-center i-justify-between logo-img" style="margin-right:26px;height:52px;">
		<a href="/">
			<img class="share-nav-logo" src="/img/logo/nav-logo.svg">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		<a class="item " href="/">首页</a>
		<a class="item" href="http://help.agit.ai" id="help-header-a" target="_blank">帮助</a>
		<a class="mobile-only item " href="/explore/repos">探索</a>
		<div class="ui input d-relative navbar-search not-mobile" :class="{active:menuVisible}">
			<i class="icon iconfont icon-search"></i>
			<input v-model="searchName" placeholder="搜索" type="text" autocomplete="off"  @focus="menuVisible = true">
			<div v-show="searchName.trim() && menuVisible" class="ui segment transition z-menu" @focus="menuVisible = true">
				<div class="ui list" @click="handleSearch('repos')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">仓库</span>
				</div>
				<div class="ui list" @click="handleSearch('users')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">用户</span>
				</div>
				<div class="ui list" @click="handleSearch('organizations')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">组织</span>
				</div>
			</div>

		</div>
	
	

	


	

<div class="right stackable menu header-right">
	
	<div class="ui dropdown jump item poping up active visible">
		<i class="iconfont mr-3xs font-size-2xl" :class='{"icon-lang-zh2en":lan!=="en-US","icon-lang-en2zh":lan==="en-US"}'></i>
		<span id="footerLang" class="hidden">简体中文</span>
		<i class="caret down icon font-size-sm"></i>
		<div class="menu">
			
			<span lang="zh-CN" class="item active selected" onclick="handleLanguage(&#34;zh-CN&#34;)">简体中文</span>
			
			<span lang="en-US" class="item " onclick="handleLanguage(&#34;en-US&#34;)">English</span>
			
		</div>
	</div>

	
	<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fgk0748%2fpxy%2fsrc%2fbranch%2fmaster%2f%25e9%2585%25b7%25e4%25ba%259177.js">
		<svg viewBox="0 0 16 16" class="svg octicon-sign-in" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm6.56 4.5l1.97-1.97a.75.75 0 10-1.06-1.06L6.22 7.47a.75.75 0 000 1.06l3.25 3.25a.75.75 0 101.06-1.06L8.56 8.75h5.69a.75.75 0 000-1.5H8.56z"/></svg> 登录
	</a>
</div>


</div>

			</div>
		


<div id="repoHome" class="repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="ui huge breadcrumb repo-title">
				
					<div class="repo-header-icon">
	
		
			<svg viewBox="0 0 16 16" class="svg octicon-repo" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
			
		
	
</div>

				
				<a href="/gk0748">gk0748</a>
				<div class="divider"> / </div>
				<a href="/gk0748/pxy">pxy</a>

				<i class="iconfont icon-ai"></i>

				
					
						
					
				
				
				
				
				
			</div>
			
				<div class="repo-buttons">
					<form method="post" action="/gk0748/pxy/action/watch?redirect_to=%2fgk0748%2fpxy%2fsrc%2fbranch%2fmaster%2f%25e9%2585%25b7%25e4%25ba%259177.js">
						<input type="hidden" name="_csrf" value="4v-Wt9ITdBRbdA8RvM_ZxH_fdK46MTY5NDYwOTU5ODk2OTcwMDQxNw">
						<div class="ui labeled button poping up" tabindex="0" data-content="请登录后再关注此仓库" data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact basic button" disabled>
								<i class="iconfont mr-2xs icon-eye"></i>关注
							</button>
							<a class="ui basic label" href="/gk0748/pxy/watchers">
								2
							</a>
						</div>
					</form>
					<form method="post" action="/gk0748/pxy/action/star?redirect_to=%2fgk0748%2fpxy%2fsrc%2fbranch%2fmaster%2f%25e9%2585%25b7%25e4%25ba%259177.js">
						<input type="hidden" name="_csrf" value="4v-Wt9ITdBRbdA8RvM_ZxH_fdK46MTY5NDYwOTU5ODk2OTcwMDQxNw">
						<div class="ui labeled button poping up" tabindex="0" data-content="请登录后再点赞此仓库" data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact basic button" disabled>
								<i class="mr-2xs iconfont icon-star"></i>点赞
							</button>
							<a class="ui basic label" href="/gk0748/pxy/stars">
								2
							</a>
						</div>
					</form>
					
						<div class="ui labeled button " tabindex="0">
							<a class="ui compact basic button
								poping up"
								 data-content="登录并 派生 这个仓库。" rel="nofollow"
									href="/user/login?redirect_to=/repo/fork/12435"
								 data-position="top center" data-variation="tiny">
								<i class="mr-2xs iconfont icon-fork"></i>派生
							</a>
							<a class="ui basic label" href="/gk0748/pxy/forks">
								2
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular stackable menu navbar">
				
				<a class="active item" href="/gk0748/pxy">
					<i class="iconfont icon-code"></i> 代码
				</a>
				

				
					<a class=" item" href="/gk0748/pxy/issues">
						<i class="iconfont icon-open"></i> 讨论 <span class="ui gray tiny label circular">0</span>
					</a>
				

				

				
					<a class=" item" href="/gk0748/pxy/pulls">
						<i class="iconfont icon-merge-request"></i> 合并请求 <span class="ui gray tiny label circular">0</span>
					</a>
				

				
					<a class=" item" href="/gk0748/pxy/wiki" >
						<i class="iconfont icon-wiki"></i> 百科
					</a>
				

				
					<a class=" item" href="/gk0748/pxy/activity">
						<i class="iconfont icon-activity"></i> 动态
					</a>
				

				


				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<span class="repo-url hidden">/gk0748/pxy</span>
	<span class="repo-id hidden">12435</span>
	<div class="ui container">
		



		<div class="ui repo-description">
			<div id="repo-desc">
				
				<a class="link" href=""></a>
			</div>
			
		</div>
		<div class="ui" id="repo-topics">
		
		
		</div>
		
		<div class="hide" id="validate_prompt">
			<span id="count_prompt">您最多选择25个主题</span>
			<span id="format_prompt">主题必须以字母或数字开头，可以包含连字符 (-)，并且长度不得超过35个字符</span>
		</div>
		
		
		

		<div class="ui segments repository-summary shadow-0 is-lang-stats">
	<div class="ui segment sub-menu repository-menu">
		<div class="ui two horizontal center link list">
			
				<div class="item">
					<a class="ui" href="/gk0748/pxy/commits/branch/master"><i class="iconfont icon-commit"></i> <b>119</b> 提交</a>
				</div>
			
			
				<div class="item">
					<a class="ui" href="/gk0748/pxy/branches/"><i class="iconfont icon-branch-down"></i> <b>1</b> 分支</a>
				</div>
				<div class="item">
					<span class="ui"><i class="iconfont icon-memory"></i> <b id="RepoSize">13 MB</b></span>
				</div>
			
		</div>
	</div>
	
	<div class="ui segment sub-menu language-stats-details" style="display: none">
		<div class="ui horizontal center link list">
			
			<div class="item">
				<span class="ui">
				<i class="color-icon" style="background-color: #f1e05a"></i>
				<b>
					JavaScript
				
				</b> 100%</span>
			</div>
			
		</div>
	</div>
	<a class="ui segment language-stats">
		
		<div class="bar" style="width: 100%; background-color: #f1e05a">&nbsp;</div>
		
	</a>
	
</div>

		<div class="ui stackable secondary menu mobile--margin-between-items mobile--no-negative-margins">
			<div class="fitted item choose reference">
	<div class="ui floating filter dropdown custom" data-can-create-branch="false" data-no-results="未找到结果">
		<div id="branchSelect" class="ui basic small compact button" data-mode="branches" @click="menuVisible = !menuVisible" @keyup.enter="menuVisible = !menuVisible">
			<span class="text">
				<i class="iconfont icon-branch-down"></i>
				分支:
				<strong>master</strong>
			</span>
			<i class="dropdown icon"></i>
		</div>
		<div class="data" style="display: none" data-mode="branches">
			
				<div class="item branch selected" data-url="/gk0748/pxy/src/branch/master/%e9%85%b7%e4%ba%9177.js">master</div>
			
			
		</div>
		<div class="menu transition" :class="{visible: menuVisible}" v-if="menuVisible" v-cloak>
			<div class="ui icon search input">
				<i class="filter icon"></i>
				<input name="search" ref="searchField" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
			</div>
			<div class="header branch-tag-choice">
				<div class="ui grid">
					<div class="two column row">
						<a class="reference column" href="#" @click="mode = 'branches'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'branches'}">
								<i class="iconfont icon-branch-down"></i> 分支列表
							</span>
						</a>
						<a class="reference column" href="#" @click="mode = 'tags'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'tags'}">
								<i class="reference tags icon"></i> 标签列表
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="scrolling menu" ref="scrollContainer">
				<div v-for="(item, index) in filteredItems" :key="item.name" class="item" :class="{selected: item.selected, active: active == index}" @click="selectItem(item)" :ref="'listItem' + index">${ item.name }</div>
				<div class="item" v-if="showCreateNewBranch" :class="{active: active == filteredItems.length}" :ref="'listItem' + filteredItems.length">
					<a href="#" @click="createNewBranch()">
						<div>
							<i class="iconfont icon-branch-down"></i>
							创建分支 <strong>${ searchTerm }</strong>
						</div>
						<div class="text small">
							
								从 &#39;master&#39;
							
						</div>
					</a>
					<form ref="newBranchForm" action="/gk0748/pxy/branches/_new/branch/master" method="post">
						<input type="hidden" name="_csrf" value="4v-Wt9ITdBRbdA8RvM_ZxH_fdK46MTY5NDYwOTU5ODk2OTcwMDQxNw">
						<input type="hidden" name="new_branch_name" v-model="searchTerm">
					</form>
				</div>
			</div>
			<div class="message" v-if="showNoResults">${ noResults }</div>
		</div>
	</div>
</div>

			
			
			
			
				<div class="fitted item">
					<span class="ui breadcrumb repo-path">
						<a class="section" href="/gk0748/pxy/src/branch/master" title="pxy">pxy</a>
						
							<span class="divider">/</span>
							
								<span class="active section" title="酷云77.js">酷云77.js</span>
							
						</span></div>
			
			<div class="right fitted item" id="file-buttons">
				<div>
					
						
						
					

					
					
				</div>
			</div>

			<div class="fitted item">
				
				
			</div>
		</div>
		
			<div class="tab-size-8 non-diff-file-content">
	<h4 class="file-header ui top attached header">
		<div class="file-header-left df ac">
			
				<div class="file-info text grey normal mono">
					
					
						<div class="file-info-entry">
							139 行
						</div>
					
					
						<div class="file-info-entry">
							11 KB
						</div>
					
					
				</div>
			
		</div>
		
		<div class="file-header-right df ac">
			<div class="ui right file-actions">
				<div class="ui buttons">
					<a class="ui button" href="/gk0748/pxy/raw/branch/master/%e9%85%b7%e4%ba%9177.js">原始文件</a>
					
						<a class="ui button" href="/gk0748/pxy/src/commit/90871a4716553901e7c26d9cd5464d54a92e08de/%e9%85%b7%e4%ba%9177.js">永久链接</a>
					
					
						<a class="ui button" href="/gk0748/pxy/blame/branch/master/%e9%85%b7%e4%ba%9177.js">Blame</a>
					
					<a class="ui button" href="/gk0748/pxy/commits/branch/master/%e9%85%b7%e4%ba%9177.js">文件历史</a>
				</div>
				
					
						<span class="btn-octicon poping up disabled" data-content="您必须在派生这个仓库才能对此文件进行修改操作" data-position="bottom center" data-variation="tiny inverted"><svg viewBox="0 0 16 16" class="svg octicon-pencil" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"/></svg></span>
					
					
						<span class="btn-octicon poping up disabled" data-content="您必须具有写权限才能对此文件进行修改操作。" data-position="bottom center" data-variation="tiny inverted"><svg viewBox="0 0 16 16" class="svg octicon-trashcan" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"/></svg></span>
					
				
			</div>
		</div>
		
	</h4>
	<div class="ui attached table unstackable segment">
		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						<tr>
							<td id="L1" class="lines-num">
								<span id="L1" data-line-number="1"></span>
							</td>
							<td rel="L1" class="lines-code chroma">
								<code><span class="c1">// 注意事项:此源仅支持tvbox的js1以及c#版drpy的js0，暂不支持drpy官方py版的js0</code>
							</td>
						</tr>
						
						<tr>
							<td id="L2" class="lines-num">
								<span id="L2" data-line-number="2"></span>
							</td>
							<td rel="L2" class="lines-code chroma">
								<code></span><span class="c1"></span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L3" class="lines-num">
								<span id="L3" data-line-number="3"></span>
							</td>
							<td rel="L3" class="lines-code chroma">
								<code><span class="c1">// 注入全局方法,方便</code>
							</td>
						</tr>
						
						<tr>
							<td id="L4" class="lines-num">
								<span id="L4" data-line-number="4"></span>
							</td>
							<td rel="L4" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="nx">globalThis</span><span class="p">.</span><span class="nx">getTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L5" class="lines-num">
								<span id="L5" data-line-number="5"></span>
							</td>
							<td rel="L5" class="lines-code chroma">
								<code><span class="kd">let</span> <span class="nx">ts</span><span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="p">)</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="p">)</span><span class="o">/</span><span class="mi">1000</span><span class="p">)</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L6" class="lines-num">
								<span id="L6" data-line-number="6"></span>
							</td>
							<td rel="L6" class="lines-code chroma">
								<code><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;获取时间戳:&#39;</span><span class="o">+</span><span class="nx">ts</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L7" class="lines-num">
								<span id="L7" data-line-number="7"></span>
							</td>
							<td rel="L7" class="lines-code chroma">
								<code><span class="k">return</span> <span class="nx">ts</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L8" class="lines-num">
								<span id="L8" data-line-number="8"></span>
							</td>
							<td rel="L8" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L9" class="lines-num">
								<span id="L9" data-line-number="9"></span>
							</td>
							<td rel="L9" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L10" class="lines-num">
								<span id="L10" data-line-number="10"></span>
							</td>
							<td rel="L10" class="lines-code chroma">
								<code><span class="nx">globalThis</span><span class="p">.</span><span class="nx">getHeaders</span><span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span><span class="nx">ts</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L11" class="lines-num">
								<span id="L11" data-line-number="11"></span>
							</td>
							<td rel="L11" class="lines-code chroma">
								<code><span class="kd">let</span> <span class="nx">tkstr</span><span class="o">=</span><span class="nx">input</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;?&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&amp;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">it</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L12" class="lines-num">
								<span id="L12" data-line-number="12"></span>
							</td>
							<td rel="L12" class="lines-code chroma">
								<code>    <span class="k">return</span> <span class="nx">it</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;=&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L13" class="lines-num">
								<span id="L13" data-line-number="13"></span>
							</td>
							<td rel="L13" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L14" class="lines-num">
								<span id="L14" data-line-number="14"></span>
							</td>
							<td rel="L14" class="lines-code chroma">
								<code><span class="nx">tkstr</span><span class="o">=</span><span class="nx">input</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;?&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;https://api.tyun77.cn&#39;</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="o">+</span><span class="nx">tkstr</span><span class="o">+</span><span class="nx">ts</span><span class="o">+</span><span class="s1">&#39;XSpeUFjJ&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L15" class="lines-num">
								<span id="L15" data-line-number="15"></span>
							</td>
							<td rel="L15" class="lines-code chroma">
								<code><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;tk加密前:&#39;</span><span class="o">+</span><span class="nx">tkstr</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L16" class="lines-num">
								<span id="L16" data-line-number="16"></span>
							</td>
							<td rel="L16" class="lines-code chroma">
								<code><span class="kd">let</span> <span class="nx">TK</span><span class="o">=</span><span class="nx">md5</span><span class="p">(</span><span class="nx">tkstr</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L17" class="lines-num">
								<span id="L17" data-line-number="17"></span>
							</td>
							<td rel="L17" class="lines-code chroma">
								<code><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;tk加密后:&#39;</span><span class="o">+</span><span class="nx">TK</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L18" class="lines-num">
								<span id="L18" data-line-number="18"></span>
							</td>
							<td rel="L18" class="lines-code chroma">
								<code><span class="kd">let</span> <span class="nx">headers</span><span class="o">=</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L19" class="lines-num">
								<span id="L19" data-line-number="19"></span>
							</td>
							<td rel="L19" class="lines-code chroma">
								<code>    <span class="s2">&#34;User-Agent&#34;</span><span class="o">:</span><span class="s2">&#34;okhttp/3.12.0&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L20" class="lines-num">
								<span id="L20" data-line-number="20"></span>
							</td>
							<td rel="L20" class="lines-code chroma">
								<code>    <span class="s2">&#34;TK&#34;</span><span class="o">:</span><span class="nx">TK</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L21" class="lines-num">
								<span id="L21" data-line-number="21"></span>
							</td>
							<td rel="L21" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L22" class="lines-num">
								<span id="L22" data-line-number="22"></span>
							</td>
							<td rel="L22" class="lines-code chroma">
								<code><span class="k">return</span> <span class="nx">headers</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L23" class="lines-num">
								<span id="L23" data-line-number="23"></span>
							</td>
							<td rel="L23" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L24" class="lines-num">
								<span id="L24" data-line-number="24"></span>
							</td>
							<td rel="L24" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L25" class="lines-num">
								<span id="L25" data-line-number="25"></span>
							</td>
							<td rel="L25" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">rule</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L26" class="lines-num">
								<span id="L26" data-line-number="26"></span>
							</td>
							<td rel="L26" class="lines-code chroma">
								<code>    <span class="nx">title</span><span class="o">:</span><span class="s1">&#39;酷云77&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L27" class="lines-num">
								<span id="L27" data-line-number="27"></span>
							</td>
							<td rel="L27" class="lines-code chroma">
								<code>    <span class="nx">host</span><span class="o">:</span><span class="s1">&#39;https://api.tyun77.cn&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L28" class="lines-num">
								<span id="L28" data-line-number="28"></span>
							</td>
							<td rel="L28" class="lines-code chroma">
								<code>    <span class="nx">homeUrl</span><span class="o">:</span><span class="s1">&#39;/api.php/provide/homeBlock?type_id=0&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L29" class="lines-num">
								<span id="L29" data-line-number="29"></span>
							</td>
							<td rel="L29" class="lines-code chroma">
								<code>    <span class="nx">searchUrl</span><span class="o">:</span><span class="s1">&#39;/api.php/provide/searchVideo?searchName=**&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L30" class="lines-num">
								<span id="L30" data-line-number="30"></span>
							</td>
							<td rel="L30" class="lines-code chroma">
								<code>    <span class="nx">searchable</span><span class="o">:</span><span class="mi">2</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L31" class="lines-num">
								<span id="L31" data-line-number="31"></span>
							</td>
							<td rel="L31" class="lines-code chroma">
								<code>    <span class="nx">quickSearch</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L32" class="lines-num">
								<span id="L32" data-line-number="32"></span>
							</td>
							<td rel="L32" class="lines-code chroma">
								<code>    <span class="nx">filterable</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L33" class="lines-num">
								<span id="L33" data-line-number="33"></span>
							</td>
							<td rel="L33" class="lines-code chroma">
								<code>    <span class="nx">multi</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L34" class="lines-num">
								<span id="L34" data-line-number="34"></span>
							</td>
							<td rel="L34" class="lines-code chroma">
								<code>    <span class="c1">// 分类链接fypage参数支持1个()表达式</code>
							</td>
						</tr>
						
						<tr>
							<td id="L35" class="lines-num">
								<span id="L35" data-line-number="35"></span>
							</td>
							<td rel="L35" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="c1">// url:&#39;/api.php/provide/searchFilter?type_id=fyclass&amp;pagesize=24&amp;pagenum=fypage&#39;, // 旧的写法注释掉</code>
							</td>
						</tr>
						
						<tr>
							<td id="L36" class="lines-num">
								<span id="L36" data-line-number="36"></span>
							</td>
							<td rel="L36" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">url</span><span class="o">:</span><span class="s1">&#39;/api.php/provide/searchFilter?devid=453CA5D864457C7DB4D0EAA93DE96E66&amp;package=com.sevenVideo.app.android&amp;pagenum=fypage&amp;pagesize=24&amp;version=&amp;sj=$ts&amp;type_id=fyclass&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L37" class="lines-num">
								<span id="L37" data-line-number="37"></span>
							</td>
							<td rel="L37" class="lines-code chroma">
								<code>    <span class="c1">// detailUrl:&#39;/api.php/provide/videoDetail?devid=453CA5D864457C7DB4D0EAA93DE96E66&amp;package=com.sevenVideo.app.android&amp;version=&amp;ids=fyid&#39;, //旧的写法注释掉</code>
							</td>
						</tr>
						
						<tr>
							<td id="L38" class="lines-num">
								<span id="L38" data-line-number="38"></span>
							</td>
							<td rel="L38" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">detailUrl</span><span class="o">:</span><span class="s1">&#39;/api.php/provide/videoDetail?devid=453CA5D864457C7DB4D0EAA93DE96E66&amp;ids=fyid&amp;package=com.sevenVideo.app.android&amp;version=&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L39" class="lines-num">
								<span id="L39" data-line-number="39"></span>
							</td>
							<td rel="L39" class="lines-code chroma">
								<code>    <span class="nx">filter_url</span><span class="o">:</span><span class="s1">&#39;year={{fl.y}}&amp;category={{fl.scat}}&amp;area={{fl.a}}&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L40" class="lines-num">
								<span id="L40" data-line-number="40"></span>
							</td>
							<td rel="L40" class="lines-code chroma">
								<code>    <span class="nx">filter</span><span class="o">:</span><span class="p">{</span><span class="mi">0</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015之前&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;lt|2015&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;其他&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;scat&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="mi">1</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015之前&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;lt|2015&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;其他&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;scat&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="mi">2</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015之前&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;lt|2015&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;其他&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;scat&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015之前&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;lt|2015&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;其他&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;scat&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">,</span> <span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;年代&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2023&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2022&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2021&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2020&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2019&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2018&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2017&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2016&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;2015&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;2015之前&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;lt|2015&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;地区&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国大陆&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;美国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;日本&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国香港&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;中国台湾&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;韩国&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;欧洲&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;其他&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;泰国&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;scat&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;类型&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全部&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;剧情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;动作&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;科幻&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;喜剧&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;战争&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;爱情&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;恐怖&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;伦理&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L41" class="lines-num">
								<span id="L41" data-line-number="41"></span>
							</td>
							<td rel="L41" class="lines-code chroma">
								<code>    <span class="nx">headers</span><span class="o">:</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L42" class="lines-num">
								<span id="L42" data-line-number="42"></span>
							</td>
							<td rel="L42" class="lines-code chroma">
								<code>		<span class="s2">&#34;User-Agent&#34;</span><span class="o">:</span><span class="s2">&#34;okhttp/3.12.0&#34;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L43" class="lines-num">
								<span id="L43" data-line-number="43"></span>
							</td>
							<td rel="L43" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L44" class="lines-num">
								<span id="L44" data-line-number="44"></span>
							</td>
							<td rel="L44" class="lines-code chroma">
								<code>    <span class="nx">timeout</span><span class="o">:</span><span class="mi">5000</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L45" class="lines-num">
								<span id="L45" data-line-number="45"></span>
							</td>
							<td rel="L45" class="lines-code chroma">
								<code>    <span class="nx">class_name</span><span class="o">:</span><span class="s1">&#39;全部&amp;电影&amp;电视剧&amp;综艺&amp;动漫&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L46" class="lines-num">
								<span id="L46" data-line-number="46"></span>
							</td>
							<td rel="L46" class="lines-code chroma">
								<code>    <span class="nx">class_url</span><span class="o">:</span><span class="s1">&#39;0&amp;1&amp;2&amp;3&amp;4&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L47" class="lines-num">
								<span id="L47" data-line-number="47"></span>
							</td>
							<td rel="L47" class="lines-code chroma">
								<code>    <span class="nx">limit</span><span class="o">:</span><span class="mi">20</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L48" class="lines-num">
								<span id="L48" data-line-number="48"></span>
							</td>
							<td rel="L48" class="lines-code chroma">
								<code>    <span class="nx">play_parse</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L49" class="lines-num">
								<span id="L49" data-line-number="49"></span>
							</td>
							<td rel="L49" class="lines-code chroma">
								<code>    <span class="nx">play_json</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L50" class="lines-num">
								<span id="L50" data-line-number="50"></span>
							</td>
							<td rel="L50" class="lines-code chroma">
								<code>    <span class="c1">// 手动调用解析请求json的url,此lazy不方便</code>
							</td>
						</tr>
						
						<tr>
							<td id="L51" class="lines-num">
								<span id="L51" data-line-number="51"></span>
							</td>
							<td rel="L51" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="c1">// lazy:&#39;js:input={parse:1,url:input};&#39;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L52" class="lines-num">
								<span id="L52" data-line-number="52"></span>
							</td>
							<td rel="L52" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">lazy</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L53" class="lines-num">
								<span id="L53" data-line-number="53"></span>
							</td>
							<td rel="L53" class="lines-code chroma">
								<code>    <span class="nx">lazy</span><span class="o">:</span><span class="s1">&#39;js:function GetPlayUrl(playUrl){let realPlay={parse:0,url:playUrl};if(/mgtv|sohu/.test(playUrl)){realPlay.headers={&#34;User-Agent&#34;:&#34;Mozilla/5.0&#34;}}else if(/bili/.test(playUrl)){realPlay.headers={&#34;User-Agent&#34;:&#34;Mozilla/5.0&#34;,Referer:&#34;https://www.bilibili.com&#34;}}else if(/ixigua/.test(playUrl)){realPlay.headers={&#34;User-Agent&#34;:&#34;Mozilla/5.0&#34;,Referer:&#34;https://www.ixigua.com&#34;}}return realPlay}if(/\\.m3u8|\\.mp4/.test(input)){input={parse:0,url:input}}else{try{let jxUrl=&#34;http://api.tyun77.cn/api.php/provide/parserUrl?url=&#34;;var t=Math.floor((new Date).getTime()/1e3).toString();let jxExt=&#34;&amp;retryNum=0&amp;pcode=010110002&amp;version=2.1&amp;devid=f9c9ce5bb5827a266829383718e6131a&amp;package=com.sevenVideo.app.android&amp;sys=android&amp;sysver=12&amp;brand=Xiaomi&amp;model=Mi_10_Pro&amp;sj=&#34;+t;let url=jxUrl+input+jxExt;let TK=&#34;/api.php/provide/parserUrl&#34;+&#34;Xiaomif9c9ce5bb5827a266829383718e6131aMi_10_Procom.sevenVideo.app.android010110002&#34;+0+t+&#34;android12&#34;+encodeURIComponent(vipUrl)+&#34;2.1&#34;+t+&#34;XSpeUFjJ&#34;;let html=request(url,{headers:{Referer:jxUrl,&#34;User-Agent&#34;:&#34;okhttp/3.12.0&#34;,TK:md5(TK)}});let urll=JSON.parse(html).data.url;let playhtml=request(urll);let playurl=JSON.parse(playhtml).url;input=GetPlayUrl(playurl)}catch(e){input={parse:1,jx:1,url:input}}}&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L54" class="lines-num">
								<span id="L54" data-line-number="54"></span>
							</td>
							<td rel="L54" class="lines-code chroma">
								<code>    <span class="nx">推荐</span><span class="o">:</span><span class="s1">&#39;json:data.blocks;contents;title;videoCover;msg;id&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L55" class="lines-num">
								<span id="L55" data-line-number="55"></span>
							</td>
							<td rel="L55" class="lines-code chroma">
								<code>    <span class="kr">double</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L56" class="lines-num">
								<span id="L56" data-line-number="56"></span>
							</td>
							<td rel="L56" class="lines-code chroma">
								<code>    <span class="c1">// 一级:&#39;json:data.result;title;videoCover;msg;id&#39;, 旧的写法注释掉</code>
							</td>
						</tr>
						
						<tr>
							<td id="L57" class="lines-num">
								<span id="L57" data-line-number="57"></span>
							</td>
							<td rel="L57" class="lines-code chroma">
								<code></span><span class="c1"></span>    <span class="nx">一级</span><span class="o">:</span><span class="sb">`</span><span class="sb">js:</code>
							</td>
						</tr>
						
						<tr>
							<td id="L58" class="lines-num">
								<span id="L58" data-line-number="58"></span>
							</td>
							<td rel="L58" class="lines-code chroma">
								<code></span><span class="sb">    var d=[];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L59" class="lines-num">
								<span id="L59" data-line-number="59"></span>
							</td>
							<td rel="L59" class="lines-code chroma">
								<code></span><span class="sb">    let ts= getTime();</code>
							</td>
						</tr>
						
						<tr>
							<td id="L60" class="lines-num">
								<span id="L60" data-line-number="60"></span>
							</td>
							<td rel="L60" class="lines-code chroma">
								<code></span><span class="sb">    input=input.replace(&#39;</span><span class="sb">$</span><span class="sb">ts&#39;,ts);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L61" class="lines-num">
								<span id="L61" data-line-number="61"></span>
							</td>
							<td rel="L61" class="lines-code chroma">
								<code></span><span class="sb">	let html = request(input,{</code>
							</td>
						</tr>
						
						<tr>
							<td id="L62" class="lines-num">
								<span id="L62" data-line-number="62"></span>
							</td>
							<td rel="L62" class="lines-code chroma">
								<code></span><span class="sb">	headers:getHeaders(input,ts)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L63" class="lines-num">
								<span id="L63" data-line-number="63"></span>
							</td>
							<td rel="L63" class="lines-code chroma">
								<code></span><span class="sb">	});</code>
							</td>
						</tr>
						
						<tr>
							<td id="L64" class="lines-num">
								<span id="L64" data-line-number="64"></span>
							</td>
							<td rel="L64" class="lines-code chroma">
								<code></span><span class="sb">	//print(html);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L65" class="lines-num">
								<span id="L65" data-line-number="65"></span>
							</td>
							<td rel="L65" class="lines-code chroma">
								<code></span><span class="sb">	html = JSON.parse(html);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L66" class="lines-num">
								<span id="L66" data-line-number="66"></span>
							</td>
							<td rel="L66" class="lines-code chroma">
								<code></span><span class="sb">    html.data.result.forEach(function(it){</code>
							</td>
						</tr>
						
						<tr>
							<td id="L67" class="lines-num">
								<span id="L67" data-line-number="67"></span>
							</td>
							<td rel="L67" class="lines-code chroma">
								<code></span><span class="sb">    d.push({</code>
							</td>
						</tr>
						
						<tr>
							<td id="L68" class="lines-num">
								<span id="L68" data-line-number="68"></span>
							</td>
							<td rel="L68" class="lines-code chroma">
								<code></span><span class="sb">    title:it.title,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L69" class="lines-num">
								<span id="L69" data-line-number="69"></span>
							</td>
							<td rel="L69" class="lines-code chroma">
								<code></span><span class="sb">    img:it.videoCover,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L70" class="lines-num">
								<span id="L70" data-line-number="70"></span>
							</td>
							<td rel="L70" class="lines-code chroma">
								<code></span><span class="sb">    desc:it.msg,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L71" class="lines-num">
								<span id="L71" data-line-number="71"></span>
							</td>
							<td rel="L71" class="lines-code chroma">
								<code></span><span class="sb">    url:it.id</code>
							</td>
						</tr>
						
						<tr>
							<td id="L72" class="lines-num">
								<span id="L72" data-line-number="72"></span>
							</td>
							<td rel="L72" class="lines-code chroma">
								<code></span><span class="sb">    })</code>
							</td>
						</tr>
						
						<tr>
							<td id="L73" class="lines-num">
								<span id="L73" data-line-number="73"></span>
							</td>
							<td rel="L73" class="lines-code chroma">
								<code></span><span class="sb">    });</code>
							</td>
						</tr>
						
						<tr>
							<td id="L74" class="lines-num">
								<span id="L74" data-line-number="74"></span>
							</td>
							<td rel="L74" class="lines-code chroma">
								<code></span><span class="sb">    setResult(d);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L75" class="lines-num">
								<span id="L75" data-line-number="75"></span>
							</td>
							<td rel="L75" class="lines-code chroma">
								<code></span><span class="sb">    </span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L76" class="lines-num">
								<span id="L76" data-line-number="76"></span>
							</td>
							<td rel="L76" class="lines-code chroma">
								<code>    <span class="nx">二级</span><span class="o">:</span><span class="sb">`</span><span class="sb">js: var d = [];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L77" class="lines-num">
								<span id="L77" data-line-number="77"></span>
							</td>
							<td rel="L77" class="lines-code chroma">
								<code></span><span class="sb">    VOD = {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L78" class="lines-num">
								<span id="L78" data-line-number="78"></span>
							</td>
							<td rel="L78" class="lines-code chroma">
								<code></span><span class="sb">        vod_id: input</code>
							</td>
						</tr>
						
						<tr>
							<td id="L79" class="lines-num">
								<span id="L79" data-line-number="79"></span>
							</td>
							<td rel="L79" class="lines-code chroma">
								<code></span><span class="sb">    };</code>
							</td>
						</tr>
						
						<tr>
							<td id="L80" class="lines-num">
								<span id="L80" data-line-number="80"></span>
							</td>
							<td rel="L80" class="lines-code chroma">
								<code></span><span class="sb">    let ts= getTime();</code>
							</td>
						</tr>
						
						<tr>
							<td id="L81" class="lines-num">
								<span id="L81" data-line-number="81"></span>
							</td>
							<td rel="L81" class="lines-code chroma">
								<code></span><span class="sb">try {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L82" class="lines-num">
								<span id="L82" data-line-number="82"></span>
							</td>
							<td rel="L82" class="lines-code chroma">
								<code></span><span class="sb">    input=input+&#39;&amp;sj=&#39;+ts;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L83" class="lines-num">
								<span id="L83" data-line-number="83"></span>
							</td>
							<td rel="L83" class="lines-code chroma">
								<code></span><span class="sb">	let html = request(input,{</code>
							</td>
						</tr>
						
						<tr>
							<td id="L84" class="lines-num">
								<span id="L84" data-line-number="84"></span>
							</td>
							<td rel="L84" class="lines-code chroma">
								<code></span><span class="sb">	headers:getHeaders(input,ts)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L85" class="lines-num">
								<span id="L85" data-line-number="85"></span>
							</td>
							<td rel="L85" class="lines-code chroma">
								<code></span><span class="sb">	});</code>
							</td>
						</tr>
						
						<tr>
							<td id="L86" class="lines-num">
								<span id="L86" data-line-number="86"></span>
							</td>
							<td rel="L86" class="lines-code chroma">
								<code></span><span class="sb">	//print(html);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L87" class="lines-num">
								<span id="L87" data-line-number="87"></span>
							</td>
							<td rel="L87" class="lines-code chroma">
								<code></span><span class="sb">	html = JSON.parse(html);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L88" class="lines-num">
								<span id="L88" data-line-number="88"></span>
							</td>
							<td rel="L88" class="lines-code chroma">
								<code></span><span class="sb">	let node = html.data;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L89" class="lines-num">
								<span id="L89" data-line-number="89"></span>
							</td>
							<td rel="L89" class="lines-code chroma">
								<code></span><span class="sb">	VOD = {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L90" class="lines-num">
								<span id="L90" data-line-number="90"></span>
							</td>
							<td rel="L90" class="lines-code chroma">
								<code></span><span class="sb">		vod_id: node[&#34;id&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L91" class="lines-num">
								<span id="L91" data-line-number="91"></span>
							</td>
							<td rel="L91" class="lines-code chroma">
								<code></span><span class="sb">		vod_name: node[&#34;videoName&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L92" class="lines-num">
								<span id="L92" data-line-number="92"></span>
							</td>
							<td rel="L92" class="lines-code chroma">
								<code></span><span class="sb">		vod_pic: node[&#34;videoCover&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L93" class="lines-num">
								<span id="L93" data-line-number="93"></span>
							</td>
							<td rel="L93" class="lines-code chroma">
								<code></span><span class="sb">		type_name: node[&#34;subCategory&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L94" class="lines-num">
								<span id="L94" data-line-number="94"></span>
							</td>
							<td rel="L94" class="lines-code chroma">
								<code></span><span class="sb">		vod_year: node[&#34;year&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L95" class="lines-num">
								<span id="L95" data-line-number="95"></span>
							</td>
							<td rel="L95" class="lines-code chroma">
								<code></span><span class="sb">		vod_area: node[&#34;area&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L96" class="lines-num">
								<span id="L96" data-line-number="96"></span>
							</td>
							<td rel="L96" class="lines-code chroma">
								<code></span><span class="sb">		vod_remarks: node[&#34;msg&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L97" class="lines-num">
								<span id="L97" data-line-number="97"></span>
							</td>
							<td rel="L97" class="lines-code chroma">
								<code></span><span class="sb">		vod_actor: node[&#34;actor&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L98" class="lines-num">
								<span id="L98" data-line-number="98"></span>
							</td>
							<td rel="L98" class="lines-code chroma">
								<code></span><span class="sb">		vod_director: node[&#34;director&#34;],</code>
							</td>
						</tr>
						
						<tr>
							<td id="L99" class="lines-num">
								<span id="L99" data-line-number="99"></span>
							</td>
							<td rel="L99" class="lines-code chroma">
								<code></span><span class="sb">		vod_content: node[&#34;brief&#34;].strip()</code>
							</td>
						</tr>
						
						<tr>
							<td id="L100" class="lines-num">
								<span id="L100" data-line-number="100"></span>
							</td>
							<td rel="L100" class="lines-code chroma">
								<code></span><span class="sb">	};</code>
							</td>
						</tr>
						
						<tr>
							<td id="L101" class="lines-num">
								<span id="L101" data-line-number="101"></span>
							</td>
							<td rel="L101" class="lines-code chroma">
								<code></span><span class="sb">	let tid = input.split(&#34;ids=&#34;)[1].split(&#39;&amp;&#39;)[0];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L102" class="lines-num">
								<span id="L102" data-line-number="102"></span>
							</td>
							<td rel="L102" class="lines-code chroma">
								<code></span><span class="sb">	let listUrl=&#39;https://api.tyun77.cn/api.php/provide/videoPlaylist?devid=453CA5D864457C7DB4D0EAA93DE96E66&amp;ids=&#39;+tid+&#39;&amp;package=com.sevenVideo.app.android&amp;version=&amp;sj=&#39;+ts;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L103" class="lines-num">
								<span id="L103" data-line-number="103"></span>
							</td>
							<td rel="L103" class="lines-code chroma">
								<code></span><span class="sb">	html = request(listUrl,{</code>
							</td>
						</tr>
						
						<tr>
							<td id="L104" class="lines-num">
								<span id="L104" data-line-number="104"></span>
							</td>
							<td rel="L104" class="lines-code chroma">
								<code></span><span class="sb">	headers:getHeaders(listUrl,ts)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L105" class="lines-num">
								<span id="L105" data-line-number="105"></span>
							</td>
							<td rel="L105" class="lines-code chroma">
								<code></span><span class="sb">	});</code>
							</td>
						</tr>
						
						<tr>
							<td id="L106" class="lines-num">
								<span id="L106" data-line-number="106"></span>
							</td>
							<td rel="L106" class="lines-code chroma">
								<code></span><span class="sb">	html = JSON.parse(html);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L107" class="lines-num">
								<span id="L107" data-line-number="107"></span>
							</td>
							<td rel="L107" class="lines-code chroma">
								<code></span><span class="sb">	let episodes = html.data.episodes;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L108" class="lines-num">
								<span id="L108" data-line-number="108"></span>
							</td>
							<td rel="L108" class="lines-code chroma">
								<code></span><span class="sb">	let playMap = {};</code>
							</td>
						</tr>
						
						<tr>
							<td id="L109" class="lines-num">
								<span id="L109" data-line-number="109"></span>
							</td>
							<td rel="L109" class="lines-code chroma">
								<code></span><span class="sb">	if (typeof play_url === &#34;undefined&#34;) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L110" class="lines-num">
								<span id="L110" data-line-number="110"></span>
							</td>
							<td rel="L110" class="lines-code chroma">
								<code></span><span class="sb">		var play_url = &#34;&#34;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L111" class="lines-num">
								<span id="L111" data-line-number="111"></span>
							</td>
							<td rel="L111" class="lines-code chroma">
								<code></span><span class="sb">	}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L112" class="lines-num">
								<span id="L112" data-line-number="112"></span>
							</td>
							<td rel="L112" class="lines-code chroma">
								<code></span><span class="sb">	play_url = play_url.replace(&#34;&amp;play_url=&#34;, &#34;&amp;type=json&amp;play_url=&#34;);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L113" class="lines-num">
								<span id="L113" data-line-number="113"></span>
							</td>
							<td rel="L113" class="lines-code chroma">
								<code></span><span class="sb">	episodes.forEach(function(ep) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L114" class="lines-num">
								<span id="L114" data-line-number="114"></span>
							</td>
							<td rel="L114" class="lines-code chroma">
								<code></span><span class="sb">		let playurls = ep[&#34;playurls&#34;];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L115" class="lines-num">
								<span id="L115" data-line-number="115"></span>
							</td>
							<td rel="L115" class="lines-code chroma">
								<code></span><span class="sb">		playurls.forEach(function(playurl) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L116" class="lines-num">
								<span id="L116" data-line-number="116"></span>
							</td>
							<td rel="L116" class="lines-code chroma">
								<code></span><span class="sb">			let source = playurl[&#34;playfrom&#34;];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L117" class="lines-num">
								<span id="L117" data-line-number="117"></span>
							</td>
							<td rel="L117" class="lines-code chroma">
								<code></span><span class="sb">			if (!playMap.hasOwnProperty(source)) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L118" class="lines-num">
								<span id="L118" data-line-number="118"></span>
							</td>
							<td rel="L118" class="lines-code chroma">
								<code></span><span class="sb">				playMap[source] = []</code>
							</td>
						</tr>
						
						<tr>
							<td id="L119" class="lines-num">
								<span id="L119" data-line-number="119"></span>
							</td>
							<td rel="L119" class="lines-code chroma">
								<code></span><span class="sb">			}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L120" class="lines-num">
								<span id="L120" data-line-number="120"></span>
							</td>
							<td rel="L120" class="lines-code chroma">
								<code></span><span class="sb">			playMap[source].append(playurl[&#34;title&#34;].strip() + &#34;</span><span class="sb">$</span><span class="sb">&#34; + play_url + urlencode(playurl[&#34;playurl&#34;]))</code>
							</td>
						</tr>
						
						<tr>
							<td id="L121" class="lines-num">
								<span id="L121" data-line-number="121"></span>
							</td>
							<td rel="L121" class="lines-code chroma">
								<code></span><span class="sb">		})</code>
							</td>
						</tr>
						
						<tr>
							<td id="L122" class="lines-num">
								<span id="L122" data-line-number="122"></span>
							</td>
							<td rel="L122" class="lines-code chroma">
								<code></span><span class="sb">	});</code>
							</td>
						</tr>
						
						<tr>
							<td id="L123" class="lines-num">
								<span id="L123" data-line-number="123"></span>
							</td>
							<td rel="L123" class="lines-code chroma">
								<code></span><span class="sb">	let playFrom = [];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L124" class="lines-num">
								<span id="L124" data-line-number="124"></span>
							</td>
							<td rel="L124" class="lines-code chroma">
								<code></span><span class="sb">	let playList = [];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L125" class="lines-num">
								<span id="L125" data-line-number="125"></span>
							</td>
							<td rel="L125" class="lines-code chroma">
								<code></span><span class="sb">	Object.keys(playMap)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L126" class="lines-num">
								<span id="L126" data-line-number="126"></span>
							</td>
							<td rel="L126" class="lines-code chroma">
								<code></span><span class="sb">		.forEach(function(key) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L127" class="lines-num">
								<span id="L127" data-line-number="127"></span>
							</td>
							<td rel="L127" class="lines-code chroma">
								<code></span><span class="sb">			playFrom.append(key);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L128" class="lines-num">
								<span id="L128" data-line-number="128"></span>
							</td>
							<td rel="L128" class="lines-code chroma">
								<code></span><span class="sb">			playList.append(playMap[key].join(&#34;#&#34;))</code>
							</td>
						</tr>
						
						<tr>
							<td id="L129" class="lines-num">
								<span id="L129" data-line-number="129"></span>
							</td>
							<td rel="L129" class="lines-code chroma">
								<code></span><span class="sb">		});</code>
							</td>
						</tr>
						
						<tr>
							<td id="L130" class="lines-num">
								<span id="L130" data-line-number="130"></span>
							</td>
							<td rel="L130" class="lines-code chroma">
								<code></span><span class="sb">	let vod_play_from = playFrom.join(&#34;</span><span class="sb">$</span><span class="sb">$</span><span class="sb">$</span><span class="sb">&#34;);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L131" class="lines-num">
								<span id="L131" data-line-number="131"></span>
							</td>
							<td rel="L131" class="lines-code chroma">
								<code></span><span class="sb">	let vod_play_url = playList.join(&#34;</span><span class="sb">$</span><span class="sb">$</span><span class="sb">$</span><span class="sb">&#34;);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L132" class="lines-num">
								<span id="L132" data-line-number="132"></span>
							</td>
							<td rel="L132" class="lines-code chroma">
								<code></span><span class="sb">	VOD[&#34;vod_play_from&#34;] = vod_play_from;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L133" class="lines-num">
								<span id="L133" data-line-number="133"></span>
							</td>
							<td rel="L133" class="lines-code chroma">
								<code></span><span class="sb">	VOD[&#34;vod_play_url&#34;] = vod_play_url</code>
							</td>
						</tr>
						
						<tr>
							<td id="L134" class="lines-num">
								<span id="L134" data-line-number="134"></span>
							</td>
							<td rel="L134" class="lines-code chroma">
								<code></span><span class="sb">} catch (e) {</code>
							</td>
						</tr>
						
						<tr>
							<td id="L135" class="lines-num">
								<span id="L135" data-line-number="135"></span>
							</td>
							<td rel="L135" class="lines-code chroma">
								<code></span><span class="sb">	log(&#34;获取二级详情页发生错误:&#34; + e.message)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L136" class="lines-num">
								<span id="L136" data-line-number="136"></span>
							</td>
							<td rel="L136" class="lines-code chroma">
								<code></span><span class="sb">}</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L137" class="lines-num">
								<span id="L137" data-line-number="137"></span>
							</td>
							<td rel="L137" class="lines-code chroma">
								<code>    <span class="nx">搜索</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L138" class="lines-num">
								<span id="L138" data-line-number="138"></span>
							</td>
							<td rel="L138" class="lines-code chroma">
								<code>    <span class="nx">搜索</span><span class="o">:</span><span class="s1">&#39;json:data;videoName;videoCover;msg;id&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L139" class="lines-num">
								<span id="L139" data-line-number="139"></span>
							</td>
							<td rel="L139" class="lines-code chroma">
								<code><span class="p">}</span>
</code>
							</td>
						</tr>
						
					</tbody>
				</table>
				
			
		</div>
	</div>
</div>


	<div class="i-text-center">
		
				
		
	</div>


<script>
function submitDeleteForm() {
    var message = prompt("delete_confirm_message\n\ndelete_commit_summary", "Delete ''");
    if (message != null) {
        $("#delete-message").val(message);
        $("#delete-file-form").submit()
    }
}
</script>

		
	</div>
	<div id="toListModel">
		<div class="ui modal" id="toShare">
			<i class="close icon black"></i>
			<div class="header">共享</div>
			<div class="content">
				<form autocomplete="off" class="ui form training ignore-dirty">
					
					<div class="fields">
						<p class="px-sm py-none mb-sm">共享页面将在匿名链接下呈现所选的代码和训练结果，不会显示项目的原始链接地址。但Agit系统不会自动处理代码和训练结果，因此如果需要为匿名盲审等场景提供匿名内容，还需要您自行保证代码内容和训练结果的匿名化。</p>
					</div>

					<div class="fields">
						<div class="two wide field required">
							<label>代码分支</label>
						</div>
						<div id="branchField" class="fourteen wide field">

							<div class="fitted item choose">
								<div class="ui floating filter dropdown custom">

									<div class="ui basic small compact button" style="min-width: 200px;" @click="menuVisible = !menuVisible">
										<span class="text">
											<i class="iconfont icon-branch-down"></i>
											<span v-text='isViewBranch?"分支":"目录树"'></span>:
                      <strong v-text='isViewBranch?(selectedBranch?selectedBranch:"请选择"):(selectedTag?selectedTag:"请选择")'></strong>
										</span>
										<i class="dropdown icon" tabIndex="-1"></i>
									</div>

									<div tabindex="-1"  id="scrolling" class="menu transition menu-share" :class="{visible: menuVisible}" v-show="menuVisible" @blur="menuVisible = false">

										<div class="ui icon search input" style="width: 200px;">
											<i class="filter icon"></i>
											<input name="search" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
										</div>

										<div class="header branch-tag-choice">
											<div class="ui grid">
												<div class="two column row">
													<a class="reference column" href="javascript:;" @click="handleBranchTab(true)">
														<span class="text" :class="{black: !isViewBranch}">
															<i class="iconfont icon-branch-down"></i>
															分支列表
														</span>
													</a>
													<a class="reference column" href="javascript:;" @click="handleBranchTab(false)">
														<span class="text" :class="{black: isViewBranch}">
															<i class="reference tags icon"></i>
															标签列表
														</span>
													</a>
												</div>
											</div>
										</div>

										<div v-show="isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in branches" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>
										<div v-show="!isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in tags" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>

										<div class="message" v-if="(isViewBranch && branches.length==0) || (!isViewBranch && tags.length==0)">未找到结果</div>
									</div>

									<div class="ui pointing red basic label" style="display:none;">
										请选择分支或标签
									</div>

								</div>
							</div>
						</div>
					</div>

					<div class="fields" v-show="selectedBranch">
						<div class="two wide field">
							<label>提交</label>
						</div>
						<div id="commitWrap" class="fourteen wide field">
							<select class="ui search selection dropdown commit-wrap" name="commit">
								<option value=""></option>
							</select>
						</div>
					</div>
					<div class="fields">
						<label class="two wide field  required">共享标题</label>
						<div class="fourteen wide field trainName-filed">
							<input v-model="shareName" type="text" name="shareName"  class="form-trainName" :maxlength="16"  placeholder="请输入标题内容，最多16个字符">
						</div>
					</div>
					<div class="ui grid uioption">
						<label class="required">链接有效期</label>
					</div>
					<div class="ui grid fields">
						<div class="thirteen wide column">
							<div class="ui four item stackable tabs menu ui-link-bg">
								<a v-for="(item, index) in shareTimeList" :key="index" :class="['item', activeIdx === item.shareTimeId ? 'active' : '']" data-tab="oneday" @click="handleMenuChange(item)">
									<span v-text="formatLinkTime(item.shareTimeName)"></span></a>
							</div>
						</div>
						<div class="right aligned three wide column action mt-3xs">
							<button class="ui primary button" @click="handleLink">
								生成链接</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="ui modal" id="toCopyShareLink">
			<i class="close icon black"></i>
			<div class="header">共享链接已生成</div>
			<div class="content ui form">
				<div class="fields">
					<div class="two wide field">
						<label>链接地址:</label>
					</div>
					<div  class="fourteen wide field">
						<p v-text="linkAddress" id="share_url"></p>
					</div>
				</div>
				<div class="fields uioption">
					<div class="two wide field">
					<label>链接有效期:</label>
					</div>
					<div class="fourteen wide field">
						<p v-text="linkExDate"></p>
					</div>
				</div>
				<div class="fields uioption">
							<div class="sixteen wide field" style="text-align: right">
								<button class="ui basic icon button poping primary up clipboard share-button" id="share-button" data-original="复制链接" data-success="已复制链接" data-error="请按下 ⌘-C 或 Ctrl-C 复制" data-content="复制链接" data-variation="inverted tiny"  data-clipboard-target="#share_url">
									复制
								</button>
							</div>
				</div>

			</div>
		</div>
	</div>

</div>
<div class="content">
	<p></p>
</div>
</div>
</div>




		

		</div>

		

		<footer>
	<div class="base-footer-content i-footer mx-auto">
		<div class="ui left">
			<div class="p-logo i-flex i-align-center">
				<img class="logo-icon" src="/img/logo/logo.svg">
				<i class="logo-text">&copy; 2023 Agit Cloud Computing, Ltd.</i>
				<a  id="version-a" style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="https://agit.ai/AgitDeveloper/AgitPythonExamples/wiki"></a>
			</div>
		</div>
		<div class="ui right links p-logo">
			<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/terms">服务协议</a>
<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/privacy">隐私政策</a>
<a style="text-decoration: underline; font-size: 12px; margin-right: 16px;" target="_blank" href="/opensource">开源软件</a>
<a style="text-decoration: underline; font-size: 12px;" target="_blank" id="help-a" target="_blank" href="http://help.agit.ai/">帮助</a>

		</div>
	</div>
</footer>



		

		
		
		
		<script src="/js/index.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

		<script src="/vendor/plugins/vue/vue.min.js"></script>
<script src="/minifyjs/head_navbar.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/footer_content.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>


<script src="/vendor/plugins/promise-polyfill/polyfill.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/loadCSS.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/cssrelpreload.min.js"></script>
<script src="/vendor/plugins/vue-infinite-loading/vue-infinite-loading.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/Qrcode/qrcode.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/i-components/i.components.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

<script src="/vendor/plugins/vue-node-spec/node-spec.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/jquery-migrate/jquery-migrate.min.js?v=3.0.1"></script>
<script src="/vendor/plugins/jquery.areyousure/jquery.are-you-sure.js"></script>
<script src="/vendor/plugins/emojify/emojify.custom.js"></script>
<script src="/vendor/plugins/xterm/xterm.js"></script>









	</body>
	</html>

<script>
$("#createTraining").click(function(){

	$api.trainReachUpperLimit({repoId:Number($('.repo-id').text())}).then(data => {
        if (!data) return;
		if(data.isUpperLimit){
			$ITools.handleToast('error', $i18n.tr('code', 'trainCountLimit'))
			return
		}

		const mode = $("#branchSelect").attr("data-mode"),
	      	branch = $("#branchSelect").find("strong").text();
		let path = ""
		$(".repo-path a").each(function(index,item){
			if(index === 0){
				return
			}
			path += path === ""?$(this).attr("title"):("/"+$(this).attr("title"))
		})
		const params={
			scriptPath: $(".repo-path").find(".active.section").attr("title"),
			workSpace: path,
			branchName: mode === "branches" ? branch : "",
			tagName: mode === "branches" ? "" : branch
		}
		window.location.href = window.location.origin + $('.repo-url').text() + '/training/create?scriptFile=' + escapePound(JSON.stringify(params))
      })


})
function toUpload(el) {

const tempSplit = $("#RepoSize").text().split("GB")


if (tempSplit.length === 2 && tempSplit[0] >= 1) {
	$ITools.handleToast('error', $i18n.tr('valid', 'fileSizeLimit'))
	return
}
window.location.href = $(el).attr("data-href")
}
function handleShare() {
$('#toShare').modal('show')
}
function shareLink() {
$('#toCopyShareLink').modal('show')
}
function escapePound(str){
	let res=""
	res=str.replaceAll("%","%25")
	res=res.replaceAll("#","%23")
	res=res.replaceAll(" ","%20")
	res=res.replaceAll("?","%3F")
	return res
}
</script>

<script src="/minifyjs/auth.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/repo_home.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

