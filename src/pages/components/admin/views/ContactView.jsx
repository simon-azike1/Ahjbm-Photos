import React from "react";
import { Save, Loader2, Mail, Phone, MapPin, Instagram, User } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export const ContactView = ({ formData, onFormChange, onSave, isSaving }) => {
  const contact = formData.contact || {};

  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-1">
        <h2 className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Contact Information</h2>
        <p className="text-neutral-400">Manage how visitors can reach you.</p>
      </div>

      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label htmlFor="contact-name" className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <User size={16} className="text-neutral-500" />
              Name
            </Label>
            <Input
              id="contact-name"
              value={contact.name || ""}
              onChange={(e) => onFormChange("contact", "name", e.target.value)}
              placeholder="Jane Doe"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="contact-specialty"
              className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <MapPin size={16} className="text-neutral-500" />
              Specialty
            </Label>
            <Input
              id="contact-specialty"
              value={contact.specialty || ""}
              onChange={(e) => onFormChange("contact", "specialty", e.target.value)}
              placeholder="Portrait & Event Photography"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-email" className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Mail size={16} className="text-neutral-500" />
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={contact.email || ""}
              onChange={(e) => onFormChange("contact", "email", e.target.value)}
              placeholder="hello@example.com"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-phone" className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Phone size={16} className="text-neutral-500" />
              Phone
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              value={contact.phone || ""}
              onChange={(e) => onFormChange("contact", "phone", e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="contact-instagram"
              className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Instagram size={16} className="text-neutral-500" />
              Instagram
            </Label>
            <Input
              id="contact-instagram"
              value={contact.instagram || ""}
              onChange={(e) => onFormChange("contact", "instagram", e.target.value)}
              placeholder="@username"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="contact-location"
              className="text-neutral-300 text-sm uppercase tracking-widest flex items-center gap-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <MapPin size={16} className="text-neutral-500" />
              Location
            </Label>
            <Input
              id="contact-location"
              value={contact.location || ""}
              onChange={(e) => onFormChange("contact", "location", e.target.value)}
              placeholder="New York, NY"
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-white h-11"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 flex items-center justify-end">
          <Button
            onClick={onSave}
            disabled={isSaving}
            className="gap-2 bg-white hover:bg-neutral-200 text-black h-11 px-8 font-semibold uppercase tracking-wider text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={18} />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
