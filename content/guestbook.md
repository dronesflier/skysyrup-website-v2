---
title: heres my guestbook :333
---

add yourself into the guestbook! or go back to the [[index]]

<div id="guestbook-container" style="margin-top: 2rem;">
<div id="comments-section">
    <h3 style="color: var(--tertiary);">comments</h3>
    <div id="comments-container" style="display: flex; flex-direction: column; gap: 1rem;"></div>
    <div id="loader" style="display: none; text-align: center; padding: 1rem; color: var(--gray);">loading comments...</div>
    <button id="load-more-btn" style="display: none; margin-top: 1rem; padding: 0.75rem 1.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--secondary); color: var(--tertiary); cursor: pointer; font-weight: bold; align-self: center;">load more comments</button>
  </div>
  <div id="comment-form-section" style="margin-bottom: 2rem; padding: 1rem; border: 2px solid var(--secondary); border-radius: 0.5rem; background-color: var(--secondary);">
    <h3 style="margin-top: 0; color: var(--tertiary);">submit a comment</h3>
    <form id="comment-form" style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Name (required)</label>
        <input type="text" id="name" name="name" required style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark);">
      </div>
      <div>
        <label for="crunchy" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Region/Crunchy (optional)</label>
        <select id="crunchy" name="crunchy" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark);">
          <option value="">🌍 Select a region...</option>
          <option value="🇪🇺">🇪🇺 European Union</option>
          <option value="🇺🇸">🇺🇸 United States</option>
          <option value="🇨🇳">🇨🇳 China</option>
          <option value="🇮🇳">🇮🇳 India</option>
          <option value="🇧🇷">🇧🇷 Brazil</option>
          <option value="🇯🇵">🇯🇵 Japan</option>
          <option value="🇦🇺">🇦🇺 Australia</option>
          <option value="🇲🇽">🇲🇽 Mexico</option>
          <option value="🇮🇩">🇮🇩 Indonesia</option>
        </select>
      </div>
      <div>
        <label for="website-link" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Website Link (optional)</label>
        <input type="url" id="website-link" name="websiteLink" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark);">
      </div>
      <div>
        <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Email (optional)</label>
        <input type="email" id="email" name="email" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark);">
      </div>
      <div>
        <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Message (required)</label>
        <textarea id="message" name="message" required style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark); min-height: 6rem; font-family: inherit; font-size: 1rem;"></textarea>
      </div>
      <div>
        <label for="captcha" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">CAPTCHA</label>
        <img id="captcha-img" alt="CAPTCHA image" style="display: block; margin-bottom: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem;">
        <input type="text" id="captcha" name="captcha" required placeholder="Enter the CAPTCHA text" style="width: 100%; padding: 0.5rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--light); color: var(--dark);">
        <input type="hidden" id="captcha-id" name="captcha_id">
      </div>
      <div style="display: flex; gap: 1rem;">
        <button type="button" id="refresh-captcha-btn" style="padding: 0.5rem 1rem; border: 1px solid var(--secondary); border-radius: 0.25rem; background-color: var(--secondary); color: var(--tertiary); cursor: pointer; font-weight: bold;">refresh CAPTCHA</button>
        <button type="submit" style="padding: 0.5rem 1rem; border: 1px solid var(--tertiary); border-radius: 0.25rem; background-color: var(--light); color: var(--tertiary); cursor: pointer; font-weight: bold;">submit comment</button>
      </div>
      <div id="form-status" style="display: none; padding: 0.5rem; border-radius: 0.25rem; font-weight: bold;"></div>
    </form>
  </div>


</div>

<script src="/assets/js/guestbook.js"></script>


