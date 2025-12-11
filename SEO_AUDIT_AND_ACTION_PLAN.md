# SEO Audit & Action Plan for Request Finance

**Date:** January 2025  
**Auditor:** SEO Analysis  
**Website:** https://requestfinance.com

---

## Executive Summary

Overall SEO Foundation: **Good (7/10)**

The website has a solid SEO foundation with proper metadata implementation, structured data, and sitemap generation. However, there are several opportunities for improvement across technical SEO, on-page optimization, and content structure that could significantly boost search visibility.

---

## 1. TECHNICAL SEO

### ✅ **Strengths**
- Sitemap properly configured at `/sitemap.xml`
- Robots.txt exists and points to sitemap
- Canonical URLs implemented on all pages
- Proper use of Next.js metadata API
- Structured data (JSON-LD) implemented on homepage
- Favicon and app icons properly configured

### ❌ **Issues Found**

#### **Issue 1.1: Missing Image Optimization**
- **Priority:** High
- **Problem:** Not using Next.js `Image` component for optimized images
- **Impact:** Slower page load times, poor Core Web Vitals scores
- **Location:** Throughout the codebase
- **Current State:** Using standard `<img>` tags
- **Recommendation:** Replace all `<img>` tags with Next.js `Image` component for automatic optimization, lazy loading, and responsive images

#### **Issue 1.2: Inconsistent OpenGraph Image URLs**
- **Priority:** Medium
- **Problem:** Some pages use relative paths, others use absolute URLs for OG images
- **Impact:** Social media sharing may fail or show broken images
- **Location:** 
  - `src/app/page.jsx` - uses relative path `/images/thumbnail.png`
  - `src/app/layout.jsx` - uses absolute URL `https://requestfinance.com/images/thumbnail.png`
  - Product/Use Case/Industry pages - use relative paths
- **Recommendation:** Standardize all OpenGraph images to use absolute URLs

#### **Issue 1.3: Missing Image Optimization Configuration**
- **Priority:** Medium
- **Problem:** No image optimization domains configured in `next.config.mjs`
- **Impact:** Cannot optimize external images if needed
- **Recommendation:** Add image optimization configuration if using external image sources

#### **Issue 1.4: RSS Feed Contains Old Brand Name**
- **Priority:** Low
- **Problem:** Blog RSS feed still references "The Radiant Blog" instead of "Request Finance Blog"
- **Location:** `src/app/blog/feed.xml/route.js`
- **Impact:** Confusing branding in RSS readers
- **Recommendation:** Update to "Request Finance Blog"

#### **Issue 1.5: Missing Language/Internationalization Hreflang Tags**
- **Priority:** Low (unless planning multi-language)
- **Problem:** No hreflang tags for international SEO
- **Impact:** If expanding to other languages/regions, won't signal language/region variants
- **Recommendation:** Add hreflang tags if planning international expansion

---

## 2. ON-PAGE SEO

### ✅ **Strengths**
- Unique page titles on all pages
- Meta descriptions present
- Proper heading hierarchy (H1, H2, H3)
- Keywords meta tags included

### ❌ **Issues Found**

#### **Issue 2.1: Duplicate Meta Keywords**
- **Priority:** Low (Keywords meta tag is largely ignored by search engines)
- **Problem:** Same keywords repeated across many pages
- **Impact:** Minimal - Google doesn't use keywords meta tag
- **Recommendation:** Consider removing keywords meta tag entirely or make them more page-specific

#### **Issue 2.2: Meta Descriptions Too Long on Some Pages**
- **Priority:** Medium
- **Problem:** Some meta descriptions exceed 160 characters (optimal length)
- **Impact:** Descriptions may be truncated in search results
- **Location:** 
  - Homepage: 135 characters ✅
  - Product pages: Varies, may exceed limit
  - Use case pages: Varies
- **Recommendation:** Audit and truncate all meta descriptions to 155-160 characters

#### **Issue 2.3: Missing Unique OpenGraph Images Per Page**
- **Priority:** Medium
- **Problem:** All pages use the same generic thumbnail.png for social sharing
- **Impact:** Lower engagement on social media, less visual appeal
- **Location:** All product/use case/industry pages
- **Recommendation:** Create unique, page-specific OpenGraph images (1200x630px) for:
  - Each product page
  - Each use case page
  - Each industry page
  - Blog posts

#### **Issue 2.4: Missing Alt Text on Some Images**
- **Priority:** High
- **Problem:** Some images have empty or generic alt text
- **Impact:** Poor accessibility, missed SEO opportunity
- **Location:** 
  - `src/components/logo-timeline.jsx` - has `alt=""` (empty)
  - Various decorative images may lack descriptive alt text
- **Recommendation:** 
  - Add descriptive alt text to all images
  - Use empty alt="" only for purely decorative images
  - Include relevant keywords naturally in alt text

#### **Issue 2.5: Missing Schema Markup on Product Pages**
- **Priority:** Medium
- **Problem:** No Product schema markup on product pages
- **Impact:** Missing rich snippets opportunities in search results
- **Recommendation:** Add Product schema markup with:
  - Product name
  - Description
  - Brand (Request Finance)
  - Category
  - Aggregate rating (if applicable)

#### **Issue 2.6: Missing Article Schema on Blog Posts**
- **Priority:** Medium
- **Problem:** Blog posts have metadata but no Article schema markup
- **Impact:** Missing rich snippets for blog posts in search results
- **Recommendation:** Add Article schema markup with:
  - headline
  - datePublished
  - dateModified
  - author
  - publisher
  - image

---

## 3. CONTENT STRUCTURE

### ✅ **Strengths**
- Clear heading hierarchy
- Good use of semantic HTML
- Content is well-structured
- Internal linking present in navigation and footer

### ❌ **Issues Found**

#### **Issue 3.1: Multiple H1 Tags on Homepage**
- **Priority:** Medium
- **Problem:** Three different hero sections with H1 tags (though only one renders)
- **Impact:** Confusing for search engines, should have only one H1 per page
- **Location:** `src/app/page.jsx` - HeroSaved, HeroSavedVideoWhite, Hero functions
- **Recommendation:** Ensure only one H1 renders per page view, or remove unused hero variants

#### **Issue 3.2: Missing Breadcrumb Navigation**
- **Priority:** Medium
- **Problem:** No breadcrumb navigation on category/detail pages
- **Impact:** Users and search engines have difficulty understanding page hierarchy
- **Recommendation:** Add breadcrumb navigation with BreadcrumbList schema markup to:
  - Product pages
  - Use case pages
  - Industry pages
  - Blog post pages

#### **Issue 3.3: Limited Internal Linking Strategy**
- **Priority:** Medium
- **Problem:** Internal links primarily in navigation/footer, not contextual
- **Impact:** Missing opportunities to distribute page authority and guide users
- **Recommendation:** Add contextual internal links within content:
  - Link related products to each other
  - Link use cases to relevant industries
  - Link blog posts to relevant product/use case pages
  - Add "Related Products/Use Cases" sections

#### **Issue 3.4: Missing FAQ Schema**
- **Priority:** Low
- **Problem:** No FAQ schema markup for common questions
- **Impact:** Missing FAQ rich snippets in search results
- **Recommendation:** Create FAQ section on key pages (homepage, product pages) and add FAQPage schema

---

## 4. PERFORMANCE & CORE WEB VITALS

### ⚠️ **Potential Issues**

#### **Issue 4.1: No Image Optimization**
- **Priority:** High
- **Problem:** Using standard img tags instead of Next.js Image component
- **Impact:** 
  - Large image file sizes
  - No lazy loading
  - No responsive image generation
  - Poor LCP (Largest Contentful Paint) scores
- **Recommendation:** Implement Next.js Image component throughout

#### **Issue 4.2: External Font Loading**
- **Priority:** Medium
- **Problem:** Loading fonts from external CDN (Fontshare)
- **Impact:** Potential render-blocking, FOUT (Flash of Unstyled Text)
- **Current:** Using `link` tag in head
- **Recommendation:** Consider self-hosting fonts or using `next/font` for optimization

#### **Issue 4.3: Missing Compression/Caching Headers**
- **Priority:** Medium
- **Problem:** No explicit compression or cache headers visible
- **Impact:** Slower load times, higher bandwidth usage
- **Recommendation:** Configure Next.js headers for:
  - Gzip/Brotli compression
  - Appropriate cache-control headers
  - Static asset caching

---

## 5. STRUCTURED DATA

### ✅ **Strengths**
- Organization schema on homepage
- WebSite schema on homepage
- Proper use of JSON-LD format

### ❌ **Issues Found**

#### **Issue 5.1: Missing Social Media Links in Organization Schema**
- **Priority:** Low
- **Problem:** `sameAs` array in Organization schema is commented out
- **Location:** `src/app/page.jsx`
- **Impact:** Missing social profile connections for rich results
- **Recommendation:** Uncomment and populate with actual social media URLs:
  - Twitter/X: https://x.com/RequestFinance
  - LinkedIn: https://www.linkedin.com/company/request-finance/

#### **Issue 5.2: Missing Service/SoftwareApplication Schema**
- **Priority:** Medium
- **Problem:** No schema to describe Request Finance as a service/software
- **Impact:** Missing opportunities for software/service rich snippets
- **Recommendation:** Add SoftwareApplication schema with:
  - applicationCategory
  - operatingSystem
  - offers (pricing)
  - aggregateRating (if applicable)

#### **Issue 5.3: Missing Breadcrumb Schema**
- **Priority:** Medium
- **Problem:** No BreadcrumbList schema (even if breadcrumbs are added)
- **Impact:** Missing breadcrumb rich snippets
- **Recommendation:** Implement when adding breadcrumb navigation

---

## 6. MOBILE & ACCESSIBILITY

### ⚠️ **Areas to Review**

#### **Issue 6.1: Missing Viewport Meta Tag Verification**
- **Priority:** Low
- **Problem:** Need to verify viewport meta tag is properly set
- **Impact:** Mobile rendering issues
- **Recommendation:** Verify Next.js automatically includes this (it should)

#### **Issue 6.2: Missing ARIA Labels on Some Interactive Elements**
- **Priority:** Medium
- **Problem:** Some buttons/links may lack descriptive ARIA labels
- **Impact:** Accessibility issues for screen readers
- **Recommendation:** Audit all interactive elements for proper ARIA labels

---

## 7. URL STRUCTURE

### ✅ **Strengths**
- Clean, readable URLs
- Proper use of slugs
- No URL parameters for content

### ⚠️ **Potential Improvements**

#### **Issue 7.1: Consider Adding Category Prefixes**
- **Priority:** Low
- **Current:** `/products/corporate-cards`, `/use-cases/affiliate-payments`
- **Recommendation:** Current structure is fine, but could consider:
  - `/products/corporate-cards` vs `/corporate-cards` (shorter, cleaner)
  - This is optional and depends on site architecture preferences

---

## 8. CONTENT QUALITY

### ✅ **Strengths**
- Comprehensive product descriptions
- Clear value propositions
- Good use of headings and formatting

### ❌ **Issues Found**

#### **Issue 8.1: Blog Feed References Wrong Brand**
- **Priority:** Low
- **Problem:** Blog RSS feed title is "The Radiant Blog" instead of "Request Finance Blog"
- **Location:** `src/app/blog/feed.xml/route.js:33`
- **Impact:** Brand inconsistency
- **Recommendation:** Update to "Request Finance Blog"

#### **Issue 8.2: Missing Blog Post Content Optimization**
- **Priority:** Medium
- **Problem:** Blog posts may lack SEO-optimized content structure
- **Impact:** Lower search rankings for blog content
- **Recommendation:** Ensure blog posts have:
  - Optimized title tags (include keywords naturally)
  - Meta descriptions
  - Proper heading structure
  - Internal links to product/use case pages
  - Relevant images with alt text

---

## PRIORITY ACTION PLAN

### 🔴 **HIGH PRIORITY (Do First)**

1. **Implement Next.js Image Component**
   - Replace all `<img>` tags with `next/image`
   - Configure image optimization in next.config.mjs
   - Add proper width/height attributes
   - Expected Impact: 20-30% improvement in page load times

2. **Fix Missing/Empty Alt Text**
   - Audit all images across the site
   - Add descriptive alt text to all content images
   - Use empty alt="" only for decorative images
   - Expected Impact: Improved accessibility score, better SEO

3. **Standardize OpenGraph Image URLs**
   - Convert all relative OG image URLs to absolute URLs
   - Ensure consistency across all pages
   - Expected Impact: Proper social media sharing

### 🟡 **MEDIUM PRIORITY (Do Next)**

4. **Add Page-Specific OpenGraph Images**
   - Create unique OG images for each product (1200x630px)
   - Create unique OG images for each use case
   - Create unique OG images for each industry
   - Update metadata to reference page-specific images
   - Expected Impact: Higher social media engagement

5. **Add Product Schema Markup**
   - Implement Product schema on all product pages
   - Include relevant product information
   - Expected Impact: Rich snippets in search results

6. **Add Article Schema to Blog Posts**
   - Implement Article schema on blog post pages
   - Include author, date, publisher information
   - Expected Impact: Rich snippets for blog posts

7. **Optimize Meta Descriptions**
   - Audit all meta descriptions
   - Ensure they're 155-160 characters
   - Make them compelling and keyword-rich
   - Expected Impact: Higher click-through rates

8. **Add Breadcrumb Navigation**
   - Implement breadcrumbs on category/detail pages
   - Add BreadcrumbList schema markup
   - Expected Impact: Better UX, breadcrumb rich snippets

9. **Improve Internal Linking**
   - Add contextual internal links within content
   - Create "Related Products/Use Cases" sections
   - Link blog posts to relevant pages
   - Expected Impact: Better page authority distribution, lower bounce rate

### 🟢 **LOW PRIORITY (Nice to Have)**

10. **Update RSS Feed Branding**
    - Change "The Radiant Blog" to "Request Finance Blog"
    - Update author information if needed
    - Expected Impact: Brand consistency

11. **Add Social Media Links to Organization Schema**
    - Uncomment sameAs array
    - Add Twitter/X and LinkedIn URLs
    - Expected Impact: Better rich results

12. **Add FAQ Schema**
    - Create FAQ sections on key pages
    - Implement FAQPage schema markup
    - Expected Impact: FAQ rich snippets

13. **Add SoftwareApplication Schema**
    - Create schema for Request Finance as a software/service
    - Include pricing, features, ratings
    - Expected Impact: Software/service rich snippets

14. **Optimize Font Loading**
    - Consider self-hosting fonts
    - Or use next/font for optimization
    - Expected Impact: Slightly faster initial load

15. **Configure Cache Headers**
    - Set appropriate cache-control headers
    - Configure static asset caching
    - Expected Impact: Faster repeat visits

---

## METRICS TO TRACK

After implementing changes, monitor:

1. **Core Web Vitals**
   - LCP (Largest Contentful Paint) - Target: < 2.5s
   - FID (First Input Delay) - Target: < 100ms
   - CLS (Cumulative Layout Shift) - Target: < 0.1

2. **Search Console Metrics**
   - Impressions
   - Click-through rate (CTR)
   - Average position
   - Coverage issues

3. **Page Speed**
   - Lighthouse scores (aim for 90+)
   - Page load time
   - Time to First Byte (TTFB)

4. **SEO Metrics**
   - Indexed pages count
   - Rich snippet appearances
   - Backlinks
   - Domain authority

---

## ESTIMATED IMPACT

**High Priority Changes:**
- 20-30% improvement in page load times
- 15-25% improvement in accessibility scores
- Better social media sharing appearance

**Medium Priority Changes:**
- 10-20% improvement in click-through rates (with optimized meta descriptions)
- Potential for rich snippets in search results
- 5-10% improvement in user engagement (with breadcrumbs and internal linking)

**Overall Expected Improvement:**
- 15-25% increase in organic search visibility within 3-6 months
- Better Core Web Vitals scores
- Improved user experience metrics

---

## NOTES

- All URLs should be tested after implementation
- Verify structured data using Google's Rich Results Test
- Test OpenGraph tags using Facebook Sharing Debugger
- Monitor Search Console for any new issues after changes
- Consider A/B testing meta descriptions for key pages

---

**End of Audit**

