import{_ as s,o as a,c as p,Q as n}from"./chunks/framework.9ddf7cd9.js";const h=JSON.parse('{"title":"string","description":"","frontmatter":{},"headers":[],"relativePath":"api/string.md","filePath":"api/string.md"}'),o={name:"api/string.md"},l=n(`<h1 id="string" tabindex="-1">string <a class="header-anchor" href="#string" aria-label="Permalink to &quot;string&quot;">​</a></h1><p>常用 string 处理函数</p><h2 id="encryptedphone" tabindex="-1">encryptedPhone <a class="header-anchor" href="#encryptedphone" aria-label="Permalink to &quot;encryptedPhone&quot;">​</a></h2><p>隐藏手机中文四位数</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encryptedPhone</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">num</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encryptedPhone</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encryptedPhone</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">13311112222</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &#39;133****2222&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encryptedPhone</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">13311112222</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &#39;133****2222&#39;</span></span></code></pre></div><h2 id="transfirstletterto" tabindex="-1">transFirstLetterTo <a class="header-anchor" href="#transfirstletterto" aria-label="Permalink to &quot;transFirstLetterTo&quot;">​</a></h2><p>字符串首字母大小写转换</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transFirstLetterTo</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">to</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;upper&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lower&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transFirstLetterTo</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">to</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;upper&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lower&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">transFirstLetterTo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;upper&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// Abc</span></span>
<span class="line"><span style="color:#B392F0;">transFirstLetterTo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;abc-de&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;upper&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// Abc-de&#39;&#39;</span></span>
<span class="line"><span style="color:#B392F0;">transFirstLetterTo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ABC&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;lower&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// aBC</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">transFirstLetterTo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;upper&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// Abc</span></span>
<span class="line"><span style="color:#6F42C1;">transFirstLetterTo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;abc-de&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;upper&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// Abc-de&#39;&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">transFirstLetterTo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ABC&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;lower&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// aBC</span></span></code></pre></div><h2 id="whitespace" tabindex="-1">whiteSpace <a class="header-anchor" href="#whitespace" aria-label="Permalink to &quot;whiteSpace&quot;">​</a></h2><p>返回指定数量的空格。 num 需要大于 0，默认 num = 1</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">whiteSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">num</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">whiteSpace</span><span style="color:#24292E;">(</span><span style="color:#E36209;">num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="camelcase" tabindex="-1">camelCase <a class="header-anchor" href="#camelcase" aria-label="Permalink to &quot;camelCase&quot;">​</a></h2><p>字符串转为 camelCase 格式</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">camelCase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">camelCase</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">camelCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo-bar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// fooBar</span></span>
<span class="line"><span style="color:#B392F0;">camelCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;FooBar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// fooBar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">camelCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo-bar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// fooBar</span></span>
<span class="line"><span style="color:#6F42C1;">camelCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;FooBar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// fooBar</span></span></code></pre></div><h2 id="pascalcase" tabindex="-1">pascalCase <a class="header-anchor" href="#pascalcase" aria-label="Permalink to &quot;pascalCase&quot;">​</a></h2><p>字符串转为 pascalCase 格式</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pascalCase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pascalCase</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pascalCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo-bar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// FooBar</span></span>
<span class="line"><span style="color:#B392F0;">pascalCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Foo-Bar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// FooBar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pascalCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo-bar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// FooBar</span></span>
<span class="line"><span style="color:#6F42C1;">pascalCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Foo-Bar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// FooBar</span></span></code></pre></div><h2 id="kebabcase" tabindex="-1">kebabCase <a class="header-anchor" href="#kebabcase" aria-label="Permalink to &quot;kebabCase&quot;">​</a></h2><p>字符串转 kebab-case</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">kebabCase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">kebabCase</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kebabCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;FooBar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// foo-bar</span></span>
<span class="line"><span style="color:#B392F0;">kebabCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo bar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// foo-bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kebabCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;FooBar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// foo-bar</span></span>
<span class="line"><span style="color:#6F42C1;">kebabCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo bar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// foo-bar</span></span></code></pre></div><h2 id="snakecase" tabindex="-1">snakeCase <a class="header-anchor" href="#snakecase" aria-label="Permalink to &quot;snakeCase&quot;">​</a></h2><p>字符串转 snake_case</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">snakeCase</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">snakeCase</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">snakeCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fooBar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// foo_bar</span></span>
<span class="line"><span style="color:#B392F0;">snakeCase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;FooBar&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// foo_bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">snakeCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fooBar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// foo_bar</span></span>
<span class="line"><span style="color:#6F42C1;">snakeCase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;FooBar&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// foo_bar</span></span></code></pre></div><h2 id="replaceat" tabindex="-1">replaceAt <a class="header-anchor" href="#replaceat" aria-label="Permalink to &quot;replaceAt&quot;">​</a></h2><p>替换字符串中指定索引位置的字符</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceAt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">char</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">replaceAt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">char</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">replaceAt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;footbar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;T&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// fooTbar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">replaceAt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;footbar&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;T&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// fooTbar</span></span></code></pre></div><h2 id="deleteat" tabindex="-1">deleteAt <a class="header-anchor" href="#deleteat" aria-label="Permalink to &quot;deleteAt&quot;">​</a></h2><p>删除字符串中指定索引位置的字符</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleteAt</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteAt</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">deleteAt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;footbar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// foobar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">deleteAt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;footbar&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// foobar</span></span></code></pre></div><h2 id="removespaces" tabindex="-1">removeSpaces <a class="header-anchor" href="#removespaces" aria-label="Permalink to &quot;removeSpaces&quot;">​</a></h2><p>移除字符串中指定位置的空格</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeSpace</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">option</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;start&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;both&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeSpace</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">option</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;start&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;end&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;both&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">removeSpaces</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  hello world  &#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &quot;helloworld&quot;</span></span>
<span class="line"><span style="color:#B392F0;">removeSpaces</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  hello world  &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;start&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &quot;hello world  &quot;</span></span>
<span class="line"><span style="color:#B392F0;">removeSpaces</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  hello world  &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &quot;  hello world&quot;</span></span>
<span class="line"><span style="color:#B392F0;">removeSpaces</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;  hello world  &#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;both&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &quot;hello world&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">removeSpaces</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;  hello world  &#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &quot;helloworld&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">removeSpaces</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;  hello world  &#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;start&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &quot;hello world  &quot;</span></span>
<span class="line"><span style="color:#6F42C1;">removeSpaces</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;  hello world  &#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;end&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &quot;  hello world&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">removeSpaces</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;  hello world  &#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;both&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &quot;hello world&quot;</span></span></code></pre></div><h2 id="uuid" tabindex="-1">uuid <a class="header-anchor" href="#uuid" aria-label="Permalink to &quot;uuid&quot;">​</a></h2><p>随机生成一个uuid(v4)</p><p>signature:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">uuid</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">uuid</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span></code></pre></div><p>example:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">uuid</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// &#39;4e5f6f7f-8f9a-11ec-9dcb-0242ac120002&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">uuid</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// &#39;4e5f6f7f-8f9a-11ec-9dcb-0242ac120002&#39;</span></span></code></pre></div>`,65),e=[l];function t(c,r,y,E,i,d){return a(),p("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};