
import React, { useState } from "react";
import {
  Save,
  RefreshCw,
  X,
  Edit,
  Trash2,
  Plus,
  Users,
  FolderKanban,
  CalendarDays,
  BriefcaseBusiness,
  FileText,
  ContactRound,
  Loader2,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

const CLOUDINARY_CLOUD_NAME = "djizgbimn";
const CLOUDINARY_UPLOAD_PRESET = "ahjbm_unsigned";

export const ResourceView = ({
  resource,
  config,
  items,
  form,
  isEditing,
  onFormChange,
  onSave,
  onReset,
  onRefresh,
  onEdit,
  onDelete,
}) => {
  const [uploadingField, setUploadingField] = useState(null);

  const resourceIcons = {
    team: Users,
    projects: FolderKanban,
    events: CalendarDays,
    services: BriefcaseBusiness,
    blogs: FileText,
    contactResource: ContactRound,
  };
  const ResourceIcon = resourceIcons[config.iconKey] || FolderKanban;

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary.");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleImageUpload = async (fieldName, file) => {
    if (!file) return;

    if (!file.type?.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }

    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      alert(`Image is too large. Please upload an image under ${MAX_MB}MB.`);
      return;
    }

    try {
      setUploadingField(fieldName);
      const imageUrl = await uploadToCloudinary(file);
      onFormChange(resource, fieldName, imageUrl);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploadingField(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <ResourceIcon size={24} className="text-neutral-300" />
            {config.label} Management
          </h2>
          <p className="text-neutral-400 mt-1">{isEditing ? "Edit existing item" : "Create new item"}</p>
        </div>
        <Button
          variant="outline"
          onClick={onRefresh}
          className="gap-2 border-neutral-700 text-neutral-300 hover:bg-neutral-900 uppercase tracking-wider text-xs"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <RefreshCw size={16} />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{isEditing ? "Edit Item" : "New Item"}</h3>
            {isEditing && (
              <Button variant="ghost" size="sm" onClick={onReset} className="text-neutral-400 hover:text-white uppercase tracking-wider text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <X size={16} className="mr-1" />
                Cancel
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {config.fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name} className="text-neutral-300 uppercase tracking-widest text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {field.label}
                  {field.required && <span className="text-red-400 ml-1">*</span>}
                </Label>

                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    rows={4}
                    value={form[field.name] ?? ""}
                    onChange={(e) => onFormChange(resource, field.name, e.target.value)}
                    required={field.required}
                    className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white resize-none"
                  />
                ) : field.type === "checkbox" ? (
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(form[field.name])}
                      onChange={(e) => onFormChange(resource, field.name, e.target.checked)}
                      className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-blue-600"
                    />
                    <span className="text-neutral-300">{field.label}</span>
                  </label>
                ) : field.type === "image" ? (
                  <div className="space-y-3">
                    {/* Option 1: Paste a URL */}
                    <Input
                      id={field.name}
                      type="text"
                      value={form[field.name] ?? ""}
                      onChange={(e) => onFormChange(resource, field.name, e.target.value)}
                      required={field.required}
                      placeholder="Paste an image URL"
                      className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white"
                    />

                    {/* Option 2: Upload from device (to Cloudinary) */}
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-500 text-xs uppercase tracking-wider">or</span>
                      <div className="relative flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          disabled={uploadingField === field.name}
                          onChange={(e) => handleImageUpload(field.name, e.target.files?.[0])}
                          className="block w-full text-sm text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-neutral-900 file:text-neutral-200 hover:file:bg-neutral-800 disabled:opacity-50"
                        />
                        {uploadingField === field.name && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded">
                            <Loader2 className="animate-spin text-white" size={20} />
                            <span className="ml-2 text-white text-sm">Uploading...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Preview */}
                    {form[field.name] ? (
                      <div className="border border-neutral-800 rounded-lg p-3 bg-black">
                        <p className="text-xs text-neutral-500 mb-2">Preview</p>
                        <img
                          src={form[field.name]}
                          alt={`${field.label} preview`}
                          className="w-full max-h-56 object-cover rounded"
                          loading="lazy"
                        />
                        {form[field.name].includes("cloudinary") && (
                          <p className="text-xs text-green-500 mt-2">✓ Stored on Cloudinary CDN</p>
                        )}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Input
                    id={field.name}
                    type={field.type || "text"}
                    value={form[field.name] ?? ""}
                    onChange={(e) => onFormChange(resource, field.name, e.target.value)}
                    required={field.required}
                    className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white"
                  />
                )}
              </div>
            ))}
          </div>

          <Button onClick={onSave} className="w-full gap-2 bg-white hover:bg-neutral-200 text-black uppercase tracking-wider text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Save size={18} />
            {isEditing ? "Update Item" : "Create Item"}
          </Button>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 space-y-6">
          <h3 className="text-lg font-semibold text-white">
            {config.label} Records ({items.length})
          </h3>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Plus className="text-neutral-500" size={24} />
                </div>
                <p className="text-neutral-400 font-medium">No items yet</p>
                <p className="text-neutral-500 text-sm mt-1">Create your first item</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item._id}
                  className="p-4 rounded-lg bg-black border border-neutral-800 hover:border-neutral-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white truncate">{item.title || item.name || "Untitled"}</p>
                      {item.category && <p className="text-sm text-neutral-400 mt-0.5">{item.category}</p>}
                      {item.date && <p className="text-xs text-neutral-500 mt-0.5">{item.date}</p>}
                    </div>
                    {(item.featured || item.highlighted) && (
                      <span className="px-2 py-1 bg-neutral-800 text-neutral-200 text-xs rounded-full font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-600 font-mono bg-neutral-950 px-2 py-1 rounded mb-3 truncate">
                    {item._id}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(item)}
                      className="flex-1 gap-1 border-neutral-700 text-neutral-300 hover:bg-neutral-900 uppercase tracking-wider text-xs"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <Edit size={14} />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDelete(item._id)}
                      className="flex-1 gap-1 border-red-900/50 text-red-400 hover:bg-red-900/20 hover:border-red-800 uppercase tracking-wider text-xs"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <Trash2 size={14} />
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};