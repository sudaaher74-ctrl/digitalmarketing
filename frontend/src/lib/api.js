const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api";

class ApiClient {
  constructor() {
    this.baseUrl = API_URL;
  }

  getHeaders(includeAuth = false) {
    const headers = { "Content-Type": "application/json" };
    if (includeAuth) {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: this.getHeaders(options.auth),
      ...options,
    };

    // If body is FormData, remove Content-Type (browser sets it with boundary)
    if (options.body instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "API request failed");
    }

    return data;
  }

  // Auth
  async login(email, password) {
    const data = await this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (data.token) localStorage.setItem("token", data.token);
    return data;
  }

  async getMe() {
    return this.request("/auth/me", { auth: true });
  }

  logout() {
    localStorage.removeItem("token");
  }

  // Leads (Contact Form)
  async submitLead(formData) {
    return this.request("/leads", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Portfolio
  async getPortfolio(featured) {
    const query = featured ? "?featured=true" : "";
    return this.request(`/portfolio${query}`);
  }

  // Blog
  async getBlogPosts(page = 1, limit = 10) {
    return this.request(`/blog?page=${page}&limit=${limit}`);
  }

  async getBlogPost(slug) {
    return this.request(`/blog/${slug}`);
  }

  // Testimonials
  async getTestimonials(featured) {
    const query = featured ? "?featured=true" : "";
    return this.request(`/testimonials${query}`);
  }

  // Case Studies
  async getCaseStudies() {
    return this.request("/case-studies");
  }

  async getCaseStudy(slug) {
    return this.request(`/case-studies/${slug}`);
  }

  // Settings
  async getSettings() {
    return this.request("/settings");
  }

  // Dashboard (Admin)
  async getDashboardStats() {
    return this.request("/dashboard/stats", { auth: true });
  }

  // Admin CRUD helpers
  async adminCreate(resource, formData) {
    return this.request(`/${resource}`, {
      method: "POST",
      body: formData,
      auth: true,
    });
  }

  async adminUpdate(resource, id, formData) {
    return this.request(`/${resource}/${id}`, {
      method: "PUT",
      body: formData,
      auth: true,
    });
  }

  async adminDelete(resource, id) {
    return this.request(`/${resource}/${id}`, {
      method: "DELETE",
      auth: true,
    });
  }
}

const api = new ApiClient();
export default api;
