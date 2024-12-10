import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Alert,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app, this would be an API call
      console.log('Form submitted:', formData);
      setStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
      title: 'Email',
      content: 'support@creatorlabs.ai',
      description: 'Available 24/7 for your inquiries',
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
      title: 'Location',
      content: 'San Francisco, CA',
      description: 'Silicon Valley Innovation Hub',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#0EA5E9' }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm PST',
    },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', pb: 8 }}>
      <ParticleBackground variant="sparse" />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8, pt: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #0EA5E9, #6366F1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ color: '#94A3B8' }}>
            We'd love to hear from you. Our team is always here to help.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info) => (
            <Grid item xs={12} md={4} key={info.title}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  textAlign: 'center',
                  background: 'rgba(17, 25, 40, 0.75)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.125)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{info.icon}</Box>
                <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 1 }}>
                  {info.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#0EA5E9', mb: 1 }}>
                  {info.content}
                </Typography>
                <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                  {info.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 3, fontWeight: 600 }}>
              Send us a Message
            </Typography>
            <Typography variant="body1" sx={{ color: '#94A3B8', mb: 4 }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              {status.type && (
                <Alert severity={status.type} sx={{ mb: 3 }}>
                  {status.message}
                </Alert>
              )}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#E2E8F0',
                        '& fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA5E9',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94A3B8',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#E2E8F0',
                        '& fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA5E9',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94A3B8',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#E2E8F0',
                        '& fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA5E9',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94A3B8',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#E2E8F0',
                        '& fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(148, 163, 184, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#0EA5E9',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94A3B8',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      backgroundColor: '#0EA5E9',
                      '&:hover': {
                        backgroundColor: '#0284C7',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                minHeight: 400,
                background: 'rgba(17, 25, 40, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1521748705111"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
