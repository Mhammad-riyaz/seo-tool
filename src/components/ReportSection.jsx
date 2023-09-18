import React from "react";
import { ScoreCard } from "./ScoreCard";
import { ResultCard } from "./ResultCard";
import { ChecksCard } from "./ChecksCard";
import { DeprecatedTags } from "./DeprecatedTags";
import { Htags } from "./Htags";
import {SpeedInsights} from './SpeedInsights';

const ReportSection = (props) => {
  let onPageResults = [];
  let checks = [];
  let deprecatedTags = [];
  let speedInfo = [];
  let htags = []
  let url
  let onPageScore = 0;




  if (props.apiData) {
    
    // ------------->      results
    onPageScore = props.apiData[0].result[0].items[0].onpage_score;
    //internal links
    onPageResults.push({
      tag: "Internal Links",
      value: props.apiData[0].result[0].items[0].meta.internal_links_count,
    });
    //external links
    onPageResults.push({
      tag: "External Links",
      value: props.apiData[0].result[0].items[0].meta.external_links_count,
    });
    // images count
    onPageResults.push({
      tag: "Images Count",
      value: props.apiData[0].result[0].items[0].meta.images_count,
    });
    // images size
    onPageResults.push({
      tag: "Images Size",
      value: props.apiData[0].result[0].items[0].meta.images_size,
    });
    // scripts
    onPageResults.push({
      tag: "Scripts",
      value: props.apiData[0].result[0].items[0].meta.scripts_count,
    });
    // scripts size
    onPageResults.push({
      tag: "Scripts Size",
      value: props.apiData[0].result[0].items[0].meta.scripts_size,
    });
    // plain text size
    onPageResults.push({
      tag: "Plain Text Size",
      value: props.apiData[0].result[0].items[0].meta.content.plain_text_size,
    });
    // plain text rate
    onPageResults.push({
      tag: "Plain Text Rate",
      value:
        props.apiData[0].result[0].items[0].meta.content.plain_text_rate.toFixed(
          2
        ),
    });
    // plain text word count
    onPageResults.push({
      tag: "Plain Text Word Count",
      value:
        props.apiData[0].result[0].items[0].meta.content.plain_text_word_count,
    });
    // automated readability index
    onPageResults.push({
      tag: "Automated Readability Index",
      value:
        props.apiData[0].result[0].items[0].meta.content.automated_readability_index.toFixed(
          2
        ),
    });
    // coleman_liau_readability_index
    onPageResults.push({
      tag: "Coleman Liau Readability Index",
      value:
        props.apiData[0].result[0].items[0].meta.content.coleman_liau_readability_index.toFixed(
          2
        ),
    });
    // dale_chall_readability_index
    onPageResults.push({
      tag: "Dale Chall Readability Index",
      value:
        props.apiData[0].result[0].items[0].meta.content.dale_chall_readability_index.toFixed(
          2
        ),
    });
    // flesch_kincaid_readability_index
    onPageResults.push({
      tag: "Flesch Kincaid Readability Index",
      value:
        props.apiData[0].result[0].items[0].meta.content.flesch_kincaid_readability_index.toFixed(
          2
        ),
    });
    // smog_readability_index
    onPageResults.push({
      tag: "Smog Readability Index",
      value:
        props.apiData[0].result[0].items[0].meta.content.smog_readability_index.toFixed(
          2
        ),
    });
    // description_to_content_consistency
    onPageResults.push({
      tag: "Description To Content Consistency",
      value:
        (props.apiData[0].result[0].items[0].meta.content
          .description_to_content_consistency).toFixed(2),
    });
    // title_to_content_consistency
    onPageResults.push({
      tag: "Title To Content Consistency",
      value:
        (props.apiData[0].result[0].items[0].meta.content
          .title_to_content_consistency).toFixed(2),
    });

    // ----------->      checks

    // duplicate title
    checks.push({
      tag: "Duplicate Title",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].duplicate_title
      ),
    });
    // duplicate description
    checks.push({
      tag: "Duplicate Description",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].duplicate_description
      ),
    });
    // duplicate content
    checks.push({
      tag: "Duplicate Content",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].duplicate_content
      ),
    });
    // large page size
    checks.push({
      tag: "Large page size",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.large_page_size
      ),
    });
    // Cache control
    checks.push({
      tag: "Cache Control",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].cache_control.cachable
      ),
    });
    // Canonical
    checks.push({
      tag: "Canonical",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.canonical
      ),
    });
    // No h1 tages
    checks.push({
      tag: "No H1 Tags",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.no_h1_tag
      ),
    });
    // https_to_http_links
    checks.push({
      tag: "Https To Http Links",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.https_to_http_links
      ),
    });
    // is_4xx_code
    checks.push({
      tag: "Is 4xx Code",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.is_4xx_code
      ),
    });
    // is_5xx_code
    checks.push({
      tag: "Is 5xx Code",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.is_5xx_code
      ),
    });
    // is_broken
    checks.push({
      tag: "Is Broken",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.is_broken
      ),
    });
    // low_content_rate
    checks.push({
      tag: "Low Content Rate",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.low_content_rate
      ),
    });
    // has_render_blocking_resources
    checks.push({
      tag: "Has Render Blocking Resources",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.has_render_blocking_resources
      ),
    });
    // low_readability_rate
    checks.push({
      tag: "Low Readability Rate",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.low_readability_rate
      ),
    });
    // title_too_long
    checks.push({
      tag: "Title Too Long",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.title_too_long
      ),
    });
    // no_image_alt
    checks.push({
      tag: "No Image Alt",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.no_image_alt
      ),
    });
    // no_favicon
    checks.push({
      tag: "No Favicon",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.no_favicon
      ),
    });
    // no_title
    checks.push({
      tag: "No Title",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.no_title
      ),
    });
    // seo_friendly_url
    checks.push({
      tag: "Seo Friendly URL",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.seo_friendly_url
      ),
    });
    // title_too_short
    checks.push({
      tag: "Title Too Short",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.title_too_short
      ),
    });
    // is_www
    checks.push({
      tag: "Is www",
      value: JSON.stringify(
        props.apiData[0].result[0].items[0].checks.is_www
      ),
    });

    //  ----->    deprecatedTags
    deprecatedTags = props.apiData[0].result[0].items[0].meta.deprecated_tags;


    // ------->      htags
    htags = props.apiData[0].result[0].items[0].meta.htags 
    
    // ------>      speedInsights

    speedInfo.push({name : "Time to Secure Connection",value :(props.apiData[0].result[0].items[0].page_timing.time_to_secure_connection)})
    speedInfo.push({name : "Waiting Time",value :(props.apiData[0].result[0].items[0].page_timing.waiting_time)})
    speedInfo.push({name : "Download Time",value :(props.apiData[0].result[0].items[0].page_timing.download_time)})
    speedInfo.push({name : "Time to Interactive",value :(props.apiData[0].result[0].items[0].page_timing.time_to_interactive)})
    speedInfo.push({name : "Dom Complete",value :(props.apiData[0].result[0].items[0].page_timing.dom_complete)})
    speedInfo.push({name : "Largest Contentful Paint",value :(props.apiData[0].result[0].items[0].page_timing.largest_contentful_paint)})
    
    url = props.apiData[0].result[0].items[0].url
  }
  let resultTagElements = onPageResults.map((item) => (
    <ResultCard key={item.tag}  tag={item.tag} value={item.value} />
  ));
  let checksTagElements = checks.map((item) => (
    <ChecksCard key={item.tag}  tag={item.tag} value={item.value} />
  ));
    
  return (
    <div id="reportDiv"  className="report-section">
      <div className="website-title">
        <h1>
          Report for <a href={url} target="_blank" >{url}</a>{" "}
        </h1>
      </div>
      <ScoreCard score={onPageScore} />
      <h1>Results</h1>
      <div className="results-container">
        {props.apiData ? resultTagElements : ""}
      </div>
        
        <h1>Checks</h1>
      <div className="checkscard-container">
        {checksTagElements}
        </div>

      { deprecatedTags? <DeprecatedTags key={1} tags = {deprecatedTags}/> :"" }

     { htags?<Htags htags = {htags} />:" "}

      <SpeedInsights speedInfo = {speedInfo} />
      <div className="endBar"></div>
    </div>
  );
};

export default ReportSection;
